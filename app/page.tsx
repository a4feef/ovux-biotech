import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { ArrowRight, FlaskConical, Microscope, Building2, Dna, Leaf, ShieldCheck } from 'lucide-react'
import TrustBar from '@/components/TrustBar'
import ProcessFlow from '@/components/ProcessFlow'
import StatsBand from '@/components/StatsBand'
import SpecCard from '@/components/SpecCard'

const industries = [
  { icon: FlaskConical, label: 'Pharmaceutical Manufacturing' },
  { icon: Microscope, label: 'Analytical Labs & CROs' },
  { icon: Building2, label: 'Universities & Research' },
  { icon: Dna, label: 'Biotechnology' },
  { icon: Leaf, label: 'Environmental Labs' },
]

// TODO(afif): replace placeholder spec data with verified product specs
// TODO(afif): drop real product photos into /public/images/nitrile-gloves.jpg and /public/images/surgical-mask.jpg
const featuredSpecs = [
  {
    name: 'Nitrile Exam Gloves',
    category: 'Hospital Consumables',
    imageSrc: '/images/nitrile-gloves.jpg', // TODO(afif): add /public/images/nitrile-gloves.jpg
    specs: [
      { label: 'Material', value: 'Nitrile' },
      { label: 'Thickness', value: '0.10 mm (palm)' },
      { label: 'AQL', value: '1.5' },
      { label: 'Standard', value: 'EN455 / ASTM D6319' },
    ],
  },
  {
    name: 'Surgical Face Mask',
    category: 'Hospital Consumables',
    imageSrc: '/images/surgical-mask.jpg', // TODO(afif): add /public/images/surgical-mask.jpg
    specs: [
      { label: 'BFE', value: '>= 98%' },
      { label: 'Standard', value: 'EN14683 Type II / ASTM Level 2' },
      { label: 'Layers', value: '3-ply non-woven' },
      { label: 'Loop type', value: 'Earloop' },
    ],
  },
  {
    name: 'HPLC Column C18',
    category: 'Chromatography',
    imageSrc: '/images/hplc-column.jpg',
    specs: [
      { label: 'Phase', value: 'C18 reverse-phase' },
      { label: 'Particle size', value: '5 um' },
      { label: 'Dimensions', value: '150 x 4.6 mm' },
      { label: 'Pore size', value: '100 A' },
    ],
  },
]

export default async function HomePage() {
  const categories = await prisma.category.findMany({
    orderBy: { order: 'asc' },
    take: 4,
  })

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center">
        {/* Background image */}
        <Image
          src="/images/hero-lab-equipment.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/75 to-ink/50" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-accent-tint/80 mb-6">
              Authorized Distributor
            </p>
            <h1 className="display text-white mb-6">
              Laboratory & analytical equipment, globally sourced.
            </h1>
            <p className="font-body text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
              Ovux Biotech Solutions is a Canadian-based authorized distributor serving pharmaceutical manufacturers, analytical labs, hospitals, and CROs worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Request a Quote
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
              <Link href="/products" className="btn-ghost">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* Product Categories */}
      <section className="section-pad bg-surface">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-3">What We Supply</p>
              <h2 className="heading-2 text-ink">Product categories</h2>
            </div>
            <Link href="/products" className="btn-outline text-xs py-2 px-4 self-start md:self-auto">
              All products
              <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products/${category.slug}`}
                  className="card-surface rounded-md overflow-hidden group"
                >
                  {category.imageUrl && (
                    <div className="relative h-44 overflow-hidden bg-surface">
                      <Image
                        src={category.imageUrl}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-body font-semibold text-sm text-ink mb-1.5">{category.name}</h3>
                    <p className="text-xs text-muted line-clamp-2">{category.description}</p>
                    <div className="flex items-center gap-1 mt-4 text-accent text-xs font-medium">
                      <span>Browse</span>
                      <ArrowRight size={11} strokeWidth={2} />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              // Fallback static cards if DB is empty
              [
                { title: 'Chromatography & Analytical', desc: 'HPLC columns, GC columns, standards, reagents, and accessories.', href: '/chromatography' },
                { title: 'Laboratory Equipment', desc: 'Instruments, glassware, and consumables for analytical labs.', href: '/products' },
                { title: 'Hospital Consumables', desc: 'Gloves, masks, disinfectants, aprons, and clinical supplies.', href: '/products' },
                { title: 'Custom Sourcing', desc: 'Specialist procurement for hard-to-find or high-volume requirements.', href: '/contact' },
              ].map((c) => (
                <Link key={c.title} href={c.href} className="card-surface rounded-md p-5 group">
                  <h3 className="font-body font-semibold text-sm text-ink mb-1.5">{c.title}</h3>
                  <p className="text-xs text-muted">{c.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-accent text-xs font-medium">
                    <span>Browse</span>
                    <ArrowRight size={11} strokeWidth={2} />
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured spec cards */}
      <section className="section-pad bg-card border-t border-hairline">
        <div className="container-wide">
          <div className="mb-12">
            <p className="eyebrow mb-3">Representative Products</p>
            <h2 className="heading-2 text-ink max-w-sm">Precision sourced, spec-verified.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredSpecs.map((item) => (
              <SpecCard key={item.name} {...item} imageAlt={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Process flow */}
      <ProcessFlow />

      {/* Industries served */}
      <section className="section-pad bg-surface">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Sectors</p>
            <h2 className="heading-2 text-ink">Industries we serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <div key={label} className="card-surface rounded-md p-5 text-center">
                <Icon size={22} strokeWidth={1.5} className="text-accent mx-auto mb-3" />
                <p className="font-body text-xs font-medium text-ink leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <StatsBand />

      {/* Brands teaser */}
      <section className="section-pad-sm bg-surface border-y border-hairline">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow mb-2">Authorized Distribution</p>
            <h2 className="font-heading text-2xl text-ink font-medium">
              60+ brands. One trusted source.
            </h2>
            <p className="text-sm text-muted mt-2">
              Thermo Fisher, Waters, Shimadzu, Agilent, Phenomenex, Merck, Bio-Rad, Tosoh, and more.
            </p>
          </div>
          <Link href="/brands" className="btn-outline flex-shrink-0">
            View all brands
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Compliance section */}
      <section className="section-pad bg-card border-t border-hairline">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-3">Compliance & Standards</p>
              <h2 className="heading-2 text-ink mb-5">GMP, FDA, and ISO-aware sourcing.</h2>
              <p className="body-lg mb-8">
                We work with procurement teams in regulated environments. Every sourcing decision accounts for applicable standards and OEM terms. We do not fabricate certifications or cut compliance corners.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'GMP awareness', desc: 'Good Manufacturing Practice requirements factored into every pharmaceutical supply decision.' },
                  { label: 'FDA & EMA alignment', desc: 'We verify regulatory standing before confirming any regulated-industry order.' },
                  { label: 'ISO documentation support', desc: 'We assist with documentation needs for ISO-certified laboratory environments.' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <ShieldCheck size={16} strokeWidth={1.5} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm font-semibold text-ink">{item.label}</p>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-md overflow-hidden">
              <Image
                src="/images/lab-equipment.jpg"
                alt="Laboratory compliance environment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials scaffold - ready for real quotes */}
      {/*
      <section className="section-pad bg-surface border-t border-hairline">
        <div className="container-wide">
          <p className="eyebrow mb-3 text-center">From Our Clients</p>
          <h2 className="heading-2 text-ink text-center mb-12">What procurement teams say</h2>
          TODO(afif): add real testimonials here. Do NOT invent names, roles, or quotes.
          Format: quote body (max 3 lines), then attribution: Name, Role, Company
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            Testimonial cards go here
          </div>
        </div>
      </section>
      */}

      {/* CTA band */}
      <section className="relative section-pad overflow-hidden">
        <Image
          src="/images/lab-glassware.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative z-10 container-wide text-center">
          <h2 className="heading-1 text-white mb-5">Ready to source with confidence?</h2>
          <p className="font-body text-lg text-white/70 mb-8 max-w-lg mx-auto">
            Submit your requirements and receive a quote within 24 hours from our team in Canada.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}
