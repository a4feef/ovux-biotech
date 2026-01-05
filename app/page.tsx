import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'

export default async function HomePage() {
  const categories = await prisma.category.findMany({
    orderBy: { order: 'asc' },
    take: 4,
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Global Pharmaceutical & Laboratory Equipment Supply
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Trusted sourcing partner for pharmaceutical manufacturers, analytical labs, and regulated industries worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-center">
                  Request a Quote
                </Link>
                <Link href="/products" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 text-center">
                  View Products
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-lab-equipment.jpg"
                alt="Modern analytical laboratory"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.slug}`}
                className="card hover:shadow-lg transition-shadow"
              >
                {category.imageUrl && (
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">💊</div>
              <h3 className="font-semibold">Pharmaceutical Manufacturing</h3>
            </div>
            <div>
              <div className="text-4xl mb-2">🔬</div>
              <h3 className="font-semibold">Analytical Labs & CROs</h3>
            </div>
            <div>
              <div className="text-4xl mb-2">🎓</div>
              <h3 className="font-semibold">Universities & Research</h3>
            </div>
            <div>
              <div className="text-4xl mb-2">🧬</div>
              <h3 className="font-semibold">Biotechnology</h3>
            </div>
            <div>
              <div className="text-4xl mb-2">🌍</div>
              <h3 className="font-semibold">Environmental Labs</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Served */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Global Reach</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {['Canada', 'United States', 'European Union', 'Middle East', 'South Asia'].map((region) => (
              <div key={region} className="card">
                <h3 className="font-semibold text-lg">{region}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Compliance-Aware & Regulation-Respecting</h2>
            <p className="text-gray-700 text-lg mb-6">
              We understand the critical importance of compliance in regulated industries. Our global sourcing 
              approach focuses on providing compatible and alternative solutions while respecting OEM restrictions 
              and regulatory requirements.
            </p>
            <Link href="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

