import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createAuditLog, getClientIp } from '@/lib/audit'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const category = searchParams.get('category')
    const country = searchParams.get('country')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = (page - 1) * limit

    const where: any = {}
    if (status) where.status = status
    if (category) where.productCategory = category
    if (country) where.country = { contains: country, mode: 'insensitive' }

    const [rfqs, total] = await Promise.all([
      prisma.rFQ.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        include: {
          updatedByUser: {
            select: { name: true, email: true },
          },
        },
      }),
      prisma.rFQ.count({ where }),
    ])

    return NextResponse.json({
      rfqs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching RFQs:', error)
    return NextResponse.json({ error: 'Failed to fetch RFQs' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const rfq = await prisma.rFQ.update({
      where: { id },
      data: {
        status,
        updatedBy: session.user.id,
      },
    })

    // Create audit log
    await createAuditLog({
      userId: session.user.id,
      action: 'RFQ_UPDATE',
      entityType: 'RFQ',
      entityId: id,
      details: { status },
      ipAddress: getClientIp(request),
      userAgent: request.headers.get('user-agent') || undefined,
    })

    return NextResponse.json(rfq)
  } catch (error) {
    console.error('Error updating RFQ:', error)
    return NextResponse.json({ error: 'Failed to update RFQ' }, { status: 500 })
  }
}

