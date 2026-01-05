import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { categorySchema, sanitizeInput } from '@/lib/validation'
import { createAuditLog, getClientIp } from '@/lib/audit'

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { order: 'asc' },
      include: {
        _count: {
          select: { products: true },
        },
      },
    })

    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validationResult = categorySchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const data = validationResult.data
    const category = await prisma.category.create({
      data: {
        name: sanitizeInput(data.name),
        slug: data.slug,
        description: sanitizeInput(data.description),
        order: data.order,
        imageUrl: body.imageUrl || null,
      },
    })

    await createAuditLog({
      userId: session.user.id,
      action: 'CATEGORY_CREATE',
      entityType: 'Category',
      entityId: category.id,
      details: { name: category.name },
      ipAddress: getClientIp(request),
      userAgent: request.headers.get('user-agent') || undefined,
    })

    return NextResponse.json(category, { status: 201 })
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 })
    }

    const sanitizedData: any = {}
    if (updateData.name) sanitizedData.name = sanitizeInput(updateData.name)
    if (updateData.slug) sanitizedData.slug = updateData.slug
    if (updateData.description) sanitizedData.description = sanitizeInput(updateData.description)
    if (updateData.order !== undefined) sanitizedData.order = updateData.order
    if (updateData.imageUrl !== undefined) sanitizedData.imageUrl = updateData.imageUrl

    const category = await prisma.category.update({
      where: { id },
      data: sanitizedData,
    })

    await createAuditLog({
      userId: session.user.id,
      action: 'CATEGORY_UPDATE',
      entityType: 'Category',
      entityId: id,
      details: sanitizedData,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get('user-agent') || undefined,
    })

    return NextResponse.json(category)
  } catch (error) {
    console.error('Error updating category:', error)
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 })
    }

    await prisma.category.delete({ where: { id } })

    await createAuditLog({
      userId: session.user.id,
      action: 'CATEGORY_DELETE',
      entityType: 'Category',
      entityId: id,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get('user-agent') || undefined,
    })

    return NextResponse.json({ message: 'Category deleted successfully' })
  } catch (error) {
    console.error('Error deleting category:', error)
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 })
  }
}

