import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FlaskConical, Layers, TestTube, Wrench, ShieldCheck, ArrowRight } from 'lucide-react'
import SpecCard from '@/components/SpecCard'

export const metadata: Metadata = {
  title: 'Chromatography Solutions | Ovux Biotech Solutions',
  description: 'Authorized distribution of HPLC columns, GC columns, chromatography consumables, and accessories from Waters, Phenomenex, Shimadzu, Agilent, and more.',
}

const categories = [
  {
    icon: FlaskConical,
    title: 'HPLC Columns',
    desc: 'Reversed-phase, normal-phase, and specialty HPLC columns for analytical and preparative applications.',
    imageSrc: '/images/hplc-column.jpg',
    imageAlt: 'HPLC chromatography column',
  },
  {
    icon: Layers,
    title: 'GC Columns',
    desc: 'Capillary and packed GC columns for analytical and preparative gas chromatography workflows.',
    imageSrc: '/images/gc-column.jpg',
    imageAlt: 'GC column',
  },
  {
    icon: TestTube,
    title: 'Chromatography Consumables',
    desc: 'Vials, caps, syringes, filters, and septa essential for high-throughput chromatography labs.',
    imageSrc: '/images/lab-glassware.jpg',
    imageAlt: 'Laboratory glassware and consumables',
  },
  {
    icon: Wrench,
    title: 'Accessories & Parts',
    desc: 'Tubing, connectors, inlet liners, seals, and maintenance parts for HPLC and GC systems.',
    imageSrc: '/images/lab-equipment.jpg',
    imageAlt: 'Laboratory accessories',
  },
]

// TODO(afif): replace placeholder spec data with verified product specs
const featuredColumns = [
  {
    name: 'C18 Reversed-Phase Column',
    category: 'HPLC Columns',
    imageSrc: '/images/hplc-column.jpg',
    specs: [
      { label: 'Phase', value: 'C18' },
      { label: 'Particle size', value: '5 um' },
      { label: 'Dimensions', value: '150 x 4.6 mm' },
      { label: 'Pore size', value: '100 A' },
    ],
  },
  {
    name: 'C8 Reversed-Phase Column',
    category: 'HPLC Columns',
    imageSrc: '/images/hplc-column.jpg',
    specs: [
      { label: 'Phase', value: 'C8' },
      { label: 'Particle size', value: '3 um' },
      { label: 'Dimensions', value: '100 x 2.1 mm' },
      { label: 'Pore size', value: '100 A' },
    ],
  },
  {
    name: 'DB-5 GC Capillary Column',
    category: 'GC Columns',
    imageSrc: '/images/gc-column.jpg',
    specs: [
      { label: 'Phase', value: '5% phenyl polysiloxane' },
      { label: 'Length', value: '30 m' },
      { label: 'ID', value: '0.25 mm' },
      { label: 'Film thickness', value: '0.25 um' },
    ],
  },
]

const compliancePoints = [
  { label: 'FDA & EMA awareness', desc: 'We review regulatory standing before confirming any pharmaceutical application order.' },
  { label: 'Instrument compatibility', desc: 'We confirm column and consumable compatibility with your specific instrument system before supply.' },
  { label: 'Performance standards', desc: 'Products sourced from manufacturers maintaining recognized quality management standards.' },
  { label: 'Certification support', desc: 'We assist with documentation needs including CoA, CoC, and method validation materials where available.' },
]

export default function ChromatographyPage() {
  return (
    <div>
      {/* Page header with background */}
      <section className="relative min-h-[40vh] flex items-end pb-12">
        <Image
          src="/images/hplc-column.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/30" />
        <div className="relative z-10 container-wide">
          <p className="eyebrow text-accent-tint/80 mb-4">Chromatography</p>
          <h1 className="heading-1 text-white mb-3">HPLC & GC solutions, authorized supply.</h1>
          <p className="font-body text-white/70 max-w-xl text-base">
            We distribute columns, consumables, and accessories from leading OEM manufacturers through authorized agreements, with instrument-specific compatibility verification.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad bg-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Why It Matters</p>
              <h2 className="heading-2 text-ink mb-5">Chromatography supply demands precision sourcing.</h2>
              <p className="text-muted leading-relaxed mb-4">
                HPLC and GC consumables are specification-sensitive. Column chemistry, particle size, pore size, and dimensions directly affect method performance and reproducibility. Wrong sourcing creates validation problems.
              </p>
              <p className="text-muted leading-relaxed">
                As an authorized distributor for brands including Phenomenex, Waters, Shimadzu, and Agilent, we source to specification. We confirm instrument compatibility before supply and provide all available documentation for your qualification files.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Compatible HPLC and GC columns from authorized OEM supply',
                'Chromatography vials, caps, syringes, and septa',
                'Analytical standards and reference materials',
                'Accessories: tubing, fittings, inlet liners, seals',
                'Custom sourcing for specialist or discontinued items',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-card border border-hairline rounded-sm">
                  <ShieldCheck size={14} strokeWidth={1.5} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="section-pad bg-card border-y border-hairline">
        <div className="container-wide">
          <div className="mb-12">
            <p className="eyebrow mb-3">Product Categories</p>
            <h2 className="heading-2 text-ink">What we supply</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map(({ icon: Icon, title, desc, imageSrc, imageAlt }) => (
              <div key={title} className="card-surface rounded-md overflow-hidden flex flex-col md:flex-row">
                <div className="relative h-44 md:h-auto md:w-40 flex-shrink-0">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 160px"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={14} strokeWidth={1.5} className="text-accent" />
                    <h3 className="font-body font-semibold text-sm text-ink">{title}</h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured spec cards */}
      <section className="section-pad bg-surface">
        <div className="container-wide">
          <div className="mb-12">
            <p className="eyebrow mb-3">Representative Specifications</p>
            <h2 className="heading-2 text-ink max-w-sm">Sourced to spec, not estimate.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredColumns.map((item) => (
              <SpecCard key={item.name} {...item} imageAlt={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality & compliance */}
      <section className="section-pad bg-card border-t border-hairline">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Quality & Compliance</p>
              <h2 className="heading-2 text-ink mb-5">Verified at every stage.</h2>
              <p className="body-lg mb-8">
                Regulated-industry chromatography procurement carries compliance implications that go beyond price and lead time. We build those considerations into every supply decision.
              </p>
              <div className="space-y-5">
                {compliancePoints.map((pt) => (
                  <div key={pt.label} className="flex gap-3">
                    <ShieldCheck size={15} strokeWidth={1.5} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm font-semibold text-ink">{pt.label}</p>
                      <p className="text-sm text-muted">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent-tint border border-accent/20 rounded-md p-8 self-start">
              <h3 className="font-heading text-xl text-ink font-medium mb-3">Ready to source?</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Tell us your instrument platform, method requirements, and target specifications. We will confirm availability and compatibility before quoting.
              </p>
              <Link href="/contact" className="btn-primary">
                Request a Quote
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
