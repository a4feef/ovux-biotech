import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createObjectCsvWriter } from 'csv-writer'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const rfqs = await prisma.rFQ.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        updatedByUser: {
          select: { name: true, email: true },
        },
      },
    })

    // Convert to CSV format
    const csvData = rfqs.map((rfq) => ({
      id: rfq.id,
      name: rfq.name,
      company: rfq.company,
      email: rfq.email,
      country: rfq.country,
      productCategory: rfq.productCategory,
      productDescription: rfq.productDescription,
      quantity: rfq.quantity || '',
      frequency: rfq.frequency || '',
      requiredCerts: rfq.requiredCerts || '',
      message: rfq.message || '',
      status: rfq.status,
      createdAt: rfq.createdAt.toISOString(),
      updatedAt: rfq.updatedAt.toISOString(),
      updatedBy: rfq.updatedByUser?.name || '',
    }))

    // Generate CSV
    const csv = [
      'ID,Name,Company,Email,Country,Product Category,Product Description,Quantity,Frequency,Required Certifications,Message,Status,Created At,Updated At,Updated By',
      ...csvData.map((row) =>
        [
          row.id,
          `"${row.name.replace(/"/g, '""')}"`,
          `"${row.company.replace(/"/g, '""')}"`,
          row.email,
          `"${row.country.replace(/"/g, '""')}"`,
          `"${row.productCategory.replace(/"/g, '""')}"`,
          `"${row.productDescription.replace(/"/g, '""')}"`,
          `"${row.quantity.replace(/"/g, '""')}"`,
          `"${row.frequency.replace(/"/g, '""')}"`,
          `"${row.requiredCerts.replace(/"/g, '""')}"`,
          `"${row.message.replace(/"/g, '""')}"`,
          row.status,
          row.createdAt,
          row.updatedAt,
          `"${row.updatedBy.replace(/"/g, '""')}"`,
        ].join(',')
      ),
    ].join('\n')

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="rfqs-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    })
  } catch (error) {
    console.error('Error exporting RFQs:', error)
    return NextResponse.json({ error: 'Failed to export RFQs' }, { status: 500 })
  }
}

