import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
    include: {
      products: {
        where: { isVisible: true },
        orderBy: { createdAt: 'desc' },
      },
    },
  })

  if (!category) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/products" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
          ← Back to Products
        </Link>
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-xl text-gray-700">{category.description}</p>
      </div>

      {category.imageUrl && (
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      {category.products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <div key={product.id} id={product.id} className="card hover:shadow-lg transition-shadow">
              {product.imageUrl && (
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <Link 
                href="/contact"
                className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
              >
                Request Quote →
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-4">Products in this category are being added. Contact us for more information.</p>
          <Link href="/contact" className="btn-primary inline-block">
            Request Information
          </Link>
        </div>
      )}
    </div>
  )
}

