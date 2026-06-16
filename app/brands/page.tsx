import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Brands | Ovux Biotech Solutions',
  description: 'Ovux Biotech Solutions distributes products from leading analytical instrument, chromatography, and laboratory equipment manufacturers worldwide.',
}

// TODO(afif): replace with official vector logos from each brand-asset kit.
// Group labels are for internal organization only - do not surface on page.
const brands: { name: string; category: string }[] = [
  // Chromatography & Analytical Instruments
  { name: 'Agilent', category: 'Analytical Instruments' },
  { name: 'Altmann Analytik', category: 'Chromatography' },
  { name: 'Avantor', category: 'Lab Supplies' },
  { name: 'Bio-Rad', category: 'Life Sciences' },
  { name: 'Biotech Fluidics', category: 'Chromatography' },
  { name: 'CERI', category: 'Chromatography' },
  { name: 'Edwards', category: 'Vacuum & Gas' },
  { name: 'GE Healthcare', category: 'Life Sciences' },
  { name: 'Gilson', category: 'Analytical Instruments' },
  { name: 'GL Sciences', category: 'Chromatography' },
  { name: 'Grace', category: 'Chromatography' },
  { name: 'Grom', category: 'Chromatography' },
  { name: 'GS-Tek', category: 'Chromatography' },
  { name: 'Hamamatsu', category: 'Analytical Instruments' },
  { name: 'Hamilton', category: 'Lab Instruments' },
  { name: 'Helix Chromatography', category: 'Chromatography' },
  { name: 'Heraeus', category: 'Lab Instruments' },
  { name: 'Imtakt', category: 'Chromatography' },
  { name: 'Kromasil', category: 'Chromatography' },
  { name: 'LEEC', category: 'Lab Equipment' },
  { name: 'LNT Swissgas', category: 'Gas Standards' },
  { name: 'Macherey-Nagel', category: 'Chromatography' },
  { name: 'MEGA', category: 'Chromatography' },
  { name: 'Merck', category: 'Life Sciences' },
  { name: 'Miles Scientific', category: 'Lab Supplies' },
  { name: 'MZ Analysentechnik', category: 'Chromatography' },
  { name: 'Nacalai Tesque', category: 'Reagents' },
  { name: 'Nomura Chemical', category: 'Chromatography' },
  { name: 'Ohio Valley Specialty Company', category: 'Chromatography' },
  { name: 'PerkinElmer', category: 'Analytical Instruments' },
  { name: 'Phenomenex', category: 'Chromatography' },
  { name: 'Photron', category: 'Analytical Instruments' },
  { name: 'Porvair Sciences', category: 'Lab Supplies' },
  { name: 'Precision Glassblowing', category: 'Lab Glassware' },
  { name: 'Quadrex', category: 'Chromatography' },
  { name: 'Rheodyne (IDEX)', category: 'Chromatography' },
  { name: 'Sartorius', category: 'Lab Equipment' },
  { name: 'BE ADAM', category: 'Lab Equipment' },
  { name: 'Bambi', category: 'Lab Equipment' },
  { name: 'SETonic', category: 'Chromatography' },
  { name: 'SGE Analytical Science', category: 'Chromatography' },
  { name: 'SGT Scientific Glass Technology', category: 'Lab Glassware' },
  { name: 'Shimadzu', category: 'Analytical Instruments' },
  { name: 'Shinwa Chemical', category: 'Chromatography' },
  { name: 'Shodex', category: 'Chromatography' },
  { name: 'SIELC', category: 'Chromatography' },
  { name: 'SSI', category: 'Chromatography' },
  { name: 'Teknokroma', category: 'Chromatography' },
  { name: 'Thermo Fisher Scientific', category: 'Analytical Instruments' },
  { name: 'Tosoh', category: 'Chromatography' },
  { name: 'Trajan', category: 'Chromatography' },
  { name: 'Upchurch Scientific (IDEX)', category: 'Chromatography' },
  { name: 'Ushio', category: 'Analytical Instruments' },
  { name: 'Uvison Technologies', category: 'Analytical Instruments' },
  { name: 'VDS Optilab', category: 'Chromatography' },
  { name: 'VHG Labs', category: 'Reference Standards' },
  { name: 'VICI', category: 'Chromatography' },
  { name: 'VICI Jour', category: 'Chromatography' },
  { name: 'VWR Hitachi', category: 'Analytical Instruments' },
  { name: 'Waters', category: 'Chromatography' },
  { name: 'Zodiac', category: 'Lab Equipment' },
]

const sortedBrands = [...brands].sort((a, b) => a.name.localeCompare(b.name))

export default function BrandsPage() {
  return (
    <div>
      {/* Page header */}
      <section className="section-pad bg-card border-b border-hairline">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Distribution Partners</p>
            <h1 className="heading-1 text-ink mb-5">Brands we distribute</h1>
            <p className="body-lg">
              We hold authorized distribution agreements with leading manufacturers in analytical instruments, chromatography, laboratory equipment, and life sciences. All brand names and logos are property of their respective owners.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance note */}
      <div className="bg-accent-tint border-b border-accent/20">
        <div className="container-wide py-4 px-4 sm:px-6 lg:px-8 flex items-start gap-3">
          <ShieldCheck size={14} strokeWidth={1.5} className="text-accent flex-shrink-0 mt-0.5" />
          <p className="text-xs text-accent-hover leading-relaxed">
            We distribute under authorized agreements and respect all applicable OEM terms, brand guidelines, and regulatory requirements. We do not fabricate distribution agreements or misrepresent our relationship with any manufacturer.
          </p>
        </div>
      </div>

      {/* Brands grid */}
      <section className="section-pad bg-surface">
        <div className="container-wide">
          <p className="body-sm mb-8">
            {sortedBrands.length} brands - listed alphabetically.{' '}
            {/* TODO(afif): replace text tiles with official vector logos from each brand-asset kit */}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {sortedBrands.map((brand) => (
              <div
                key={brand.name}
                className="bg-card border border-hairline rounded-sm px-4 py-5 flex items-center justify-center
                           hover:border-accent/30 hover:shadow-rest hover:-translate-y-0.5
                           transition-all duration-200 cursor-default"
              >
                <span className="font-body text-xs font-medium text-ink text-center leading-snug">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          <p className="body-sm mt-8 text-muted/60 text-center max-w-xl mx-auto">
            All brand names, logos, and trademarks displayed here are the property of their respective owners and are used solely to identify the products we are authorized to distribute.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-card border-t border-hairline">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl text-ink font-medium mb-1">
              Looking for a specific brand or product?
            </h2>
            <p className="text-sm text-muted">
              Submit your requirements and our team will confirm availability and pricing.
            </p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            Request a Quote
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}
