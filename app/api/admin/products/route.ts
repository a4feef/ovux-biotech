import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { productSchema, sanitizeInput } from '@/lib/validation'
import { createAuditLog, getClientIp } from '@/lib/audit'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const categoryId = searchParams.get('categoryId')
    const isVisible = searchParams.get('isVisible')

    const where: any = {}
    if (categoryId) where.categoryId = categoryId
    if (isVisible !== null) where.isVisible = isVisible === 'true'

    const products = await prisma.product.findMany({
      where,
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const validationResult = productSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const data = validationResult.data
    const product = await prisma.product.create({
      data: {
        name: sanitizeInput(data.name),
        description: sanitizeInput(data.description),
        categoryId: data.categoryId,
        isVisible: data.isVisible,
        imageUrl: body.imageUrl || null,
      },
      include: { category: true },
    })

    await createAuditLog({
      userId: session.user.id,
      action: 'PRODUCT_CREATE',
      entityType: 'Product',
      entityId: product.id,
      details: { name: product.name },
      ipAddress: getClientIp(request),
      userAgent: request.headers.get('user-agent') || undefined,
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }

    const validationResult = productSchema.partial().safeParse(updateData)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const sanitizedData: any = {}
    if (updateData.name) sanitizedData.name = sanitizeInput(updateData.name)
    if (updateData.description) sanitizedData.description = sanitizeInput(updateData.description)
    if (updateData.categoryId) sanitizedData.categoryId = updateData.categoryId
    if (updateData.isVisible !== undefined) sanitizedData.isVisible = updateData.isVisible
    if (updateData.imageUrl !== undefined) sanitizedData.imageUrl = updateData.imageUrl

    const product = await prisma.product.update({
      where: { id },
      data: sanitizedData,
      include: { category: true },
    })

    await createAuditLog({
      userId: session.user.id,
      action: 'PRODUCT_UPDATE',
      entityType: 'Product',
      entityId: id,
      details: sanitizedData,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get('user-agent') || undefined,
    })

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }

    await prisma.product.delete({ where: { id } })

    await createAuditLog({
      userId: session.user.id,
      action: 'PRODUCT_DELETE',
      entityType: 'Product',
      entityId: id,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get('user-agent') || undefined,
    })

    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}

