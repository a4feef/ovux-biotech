import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)

  const [
    totalRFQs,
    newRFQs,
    totalProducts,
    totalCategories,
    recentRFQs,
  ] = await Promise.all([
    prisma.rFQ.count(),
    prisma.rFQ.count({ where: { status: 'NEW' } }),
    prisma.product.count(),
    prisma.category.count(),
    prisma.rFQ.findMany({
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
    }),
  ])

  const stats = [
    { label: 'Total RFQs', value: totalRFQs, href: '/admin/rfqs', color: 'bg-blue-500' },
    { label: 'New RFQs', value: newRFQs, href: '/admin/rfqs?status=NEW', color: 'bg-green-500' },
    { label: 'Products', value: totalProducts, href: '/admin/products', color: 'bg-purple-500' },
    { label: 'Categories', value: totalCategories, href: '/admin/categories', color: 'bg-orange-500' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="card hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl`}>
                📊
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Recent RFQs</h2>
          {recentRFQs.length > 0 ? (
            <div className="space-y-3">
              {recentRFQs.map((rfq) => (
                <div key={rfq.id} className="border-b pb-3 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{rfq.company}</p>
                      <p className="text-sm text-gray-600">{rfq.name}</p>
                      <p className="text-xs text-gray-500">{rfq.productCategory}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 text-xs rounded ${
                        rfq.status === 'NEW' ? 'bg-green-100 text-green-800' :
                        rfq.status === 'IN_REVIEW' ? 'bg-yellow-100 text-yellow-800' :
                        rfq.status === 'QUOTED' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {rfq.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(rfq.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No RFQs yet</p>
          )}
          <Link href="/admin/rfqs" className="text-primary-600 hover:text-primary-700 mt-4 inline-block">
            View All RFQs →
          </Link>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/rfqs?status=NEW"
              className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <span className="font-semibold">Review New RFQs</span>
              <p className="text-sm text-gray-600">{newRFQs} new RFQ{newRFQs !== 1 ? 's' : ''} pending</p>
            </Link>
            <Link
              href="/admin/products"
              className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <span className="font-semibold">Manage Products</span>
              <p className="text-sm text-gray-600">Add, edit, or remove products</p>
            </Link>
            {session?.user.role === 'ADMIN' && (
              <Link
                href="/admin/users"
                className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
              >
                <span className="font-semibold">Manage Users</span>
                <p className="text-sm text-gray-600">Add or modify admin accounts</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

