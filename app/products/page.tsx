import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'

export default async function ProductsPage() {
  const categories = await prisma.category.findMany({
    orderBy: { order: 'asc' },
    include: {
      products: {
        where: { isVisible: true },
        take: 3,
      },
    },
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Products & Solutions</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Explore our comprehensive range of pharmaceutical and laboratory equipment, sourced globally 
          to meet the needs of regulated industries.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category.id} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">{category.name}</h2>
              <Link 
                href={`/products/${category.slug}`}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                View All →
              </Link>
            </div>
            
            <p className="text-gray-700 mb-8">{category.description}</p>

            {category.imageUrl && (
              <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {category.products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.products.map((product) => (
                  <div key={product.id} className="card hover:shadow-lg transition-shadow">
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
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                    <Link 
                      href={`/products/${category.slug}#${product.id}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Products coming soon. Contact us for more information.</p>
                <Link href="/contact" className="btn-primary mt-4 inline-block">
                  Request Information
                </Link>
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Something Specific?</h2>
        <p className="text-gray-700 mb-6">
          Our custom sourcing service can help you find specialized equipment and consumables.
        </p>
        <Link href="/contact" className="btn-primary">
          Request a Custom Quote
        </Link>
      </div>
    </div>
  )
}

