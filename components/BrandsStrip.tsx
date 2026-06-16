import Image from 'next/image'

const brands = [
  { name: 'Thermo Fisher Scientific', logo: '/brands/thermo-fisher.svg' },
  { name: 'Merck', logo: '/brands/merck.svg' },
  { name: 'Phenomenex', logo: '/brands/phenomenex.svg' },
  { name: 'Waters', logo: '/brands/waters.svg' },
  { name: 'Shimadzu', logo: '/brands/shimadzu.svg' },
  { name: 'Agilent', logo: '/brands/agilent.svg' },
  { name: 'Bio-Rad', logo: '/brands/bio-rad.svg' },
  { name: 'Tosoh', logo: '/brands/tosoh.svg' },
]

export default function BrandsStrip() {
  return (
    <section id="brands" className="section-pad bg-surface">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Authorized Distributor</p>
          <h2 className="heading-2 text-ink">Brands We Distribute</h2>
          <p className="body-lg mt-4 max-w-xl mx-auto">
            We are an authorized distributor for leading analytical and life science instrument manufacturers. We respect all OEM terms and brand guidelines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-card border border-hairline rounded-md p-6 flex items-center justify-center
                         grayscale hover:grayscale-0 hover:shadow-hover hover:-translate-y-0.5
                         transition-all duration-200 cursor-default"
              title={brand.name}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={48}
                className="object-contain max-h-10 w-auto"
              />
            </div>
          ))}
        </div>

        <p className="text-center body-sm mt-6 text-muted/60">
          All brand names and logos are property of their respective owners. We distribute under authorized agreements and respect applicable OEM restrictions.
        </p>
      </div>
    </section>
  )
}
