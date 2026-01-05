import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || '30' // days

    const startDate = new Date()
    startDate.setDate(startDate.getDate() - parseInt(period))

    // RFQs by region
    const rfqsByRegion = await prisma.rFQ.groupBy({
      by: ['country'],
      where: {
        createdAt: { gte: startDate },
      },
      _count: true,
      orderBy: {
        _count: {
          country: 'desc',
        },
      },
      take: 10,
    })

    // RFQs by category
    const rfqsByCategory = await prisma.rFQ.groupBy({
      by: ['productCategory'],
      where: {
        createdAt: { gte: startDate },
      },
      _count: true,
      orderBy: {
        _count: {
          productCategory: 'desc',
        },
      },
    })

    // Monthly RFQ volume
    const monthlyRFQs = await prisma.rFQ.findMany({
      where: {
        createdAt: { gte: startDate },
      },
      select: {
        createdAt: true,
      },
    })

    const monthlyData = monthlyRFQs.reduce((acc: any, rfq) => {
      const month = rfq.createdAt.toISOString().slice(0, 7) // YYYY-MM
      acc[month] = (acc[month] || 0) + 1
      return acc
    }, {})

    // RFQs by status
    const rfqsByStatus = await prisma.rFQ.groupBy({
      by: ['status'],
      _count: true,
    })

    // Total counts
    const [totalRFQs, totalProducts, totalCategories] = await Promise.all([
      prisma.rFQ.count(),
      prisma.product.count(),
      prisma.category.count(),
    ])

    // Recent RFQs
    const recentRFQs = await prisma.rFQ.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        company: true,
        productCategory: true,
        status: true,
        createdAt: true,
      },
    })

    return NextResponse.json({
      rfqsByRegion: rfqsByRegion.map((r) => ({ country: r.country, count: r._count })),
      rfqsByCategory: rfqsByCategory.map((c) => ({ category: c.productCategory, count: c._count })),
      monthlyRFQs: Object.entries(monthlyData).map(([month, count]) => ({ month, count })),
      rfqsByStatus: rfqsByStatus.map((s) => ({ status: s.status, count: s._count })),
      totals: {
        rfqs: totalRFQs,
        products: totalProducts,
        categories: totalCategories,
      },
      recentRFQs,
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}

