import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products | Ovux Biotech Solutions',
  description: 'Browse our authorized distribution portfolio: chromatography systems, analytical instruments, laboratory equipment, and hospital consumables.',
}

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
    <div>
      {/* Page header */}
      <section className="section-pad bg-card border-b border-hairline">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Distribution Portfolio</p>
            <h1 className="heading-1 text-ink mb-5">Products & solutions</h1>
            <p className="body-lg">
              Authorized distribution across chromatography, analytical instruments, laboratory equipment, and hospital consumables for global regulated-industry buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories + products */}
      <div className="section-pad bg-surface">
        <div className="container-wide space-y-20">
          {categories.map((category) => (
            <section key={category.id}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-hairline pb-5">
                <div>
                  <h2 className="heading-2 text-ink">{category.name}</h2>
                  {category.description && (
                    <p className="body-sm mt-2 max-w-xl">{category.description}</p>
                  )}
                </div>
                <Link
                  href={`/products/${category.slug}`}
                  className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors flex-shrink-0"
                >
                  View all
                  <ArrowRight size={12} strokeWidth={2} />
                </Link>
              </div>

              {category.imageUrl && category.products.length === 0 && (
                <div className="relative h-56 mb-8 rounded-md overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                  />
                </div>
              )}

              {category.products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {category.products.map((product) => (
                    <div key={product.id} className="card-surface rounded-md overflow-hidden flex flex-col">
                      {product.imageUrl && (
                        <div className="relative h-44 overflow-hidden bg-surface">
                          {/* TODO(afif): replace with final product image */}
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-body font-semibold text-sm text-ink mb-2">{product.name}</h3>
                        <p className="text-xs text-muted leading-relaxed line-clamp-3 flex-1 mb-4">{product.description}</p>
                        <Link
                          href="/contact"
                          className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
                        >
                          Request Quote
                          <ArrowRight size={11} strokeWidth={2} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-hairline rounded-md p-8 text-center bg-card">
                  <p className="text-sm text-muted mb-4">Products in this category are available on request.</p>
                  <Link href="/contact" className="btn-outline text-xs py-2 px-4">
                    Request Information
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </Link>
                </div>
              )}
            </section>
          ))}

          {categories.length === 0 && (
            <div className="text-center py-20">
              <p className="body-lg mb-6">Our product catalogue is being updated.</p>
              <Link href="/contact" className="btn-primary">
                Contact us for availability
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Custom sourcing CTA */}
      <section className="section-pad-sm bg-card border-t border-hairline">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl text-ink font-medium mb-1">Need something specific?</h2>
            <p className="text-sm text-muted">Custom sourcing for hard-to-find or high-volume requirements.</p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            Request a Custom Quote
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}
