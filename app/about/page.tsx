import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Globe, Users, BookOpen, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Ovux Biotech Solutions',
  description: 'Ovux Biotech Solutions is a Canadian-incorporated authorized distributor of laboratory chromatography, analytical instruments, and hospital consumables for global markets.',
}

const principles = [
  {
    icon: ShieldCheck,
    title: 'Authorized distribution',
    desc: 'We distribute under formal agreements with OEM brand owners and respect all applicable restrictions and regulatory requirements.',
  },
  {
    icon: Globe,
    title: 'Global reach, Canadian base',
    desc: 'Incorporated in Canada, we serve procurement teams across North America, Europe, the Middle East, and Asia with consistent service standards.',
  },
  {
    icon: BookOpen,
    title: 'Regulatory awareness',
    desc: 'Every sourcing decision accounts for GMP, FDA, and ISO considerations. We verify regulatory standing before confirming regulated-industry orders.',
  },
  {
    icon: Users,
    title: 'Transparent relationships',
    desc: 'We are direct about what we carry, where it comes from, and what certifications apply. No fabricated credentials, no ambiguous claims.',
  },
]

const expertiseAreas = [
  'Chromatography systems and consumables (HPLC, GC)',
  'Analytical laboratory instruments and accessories',
  'Hospital consumables: gloves, masks, disinfectants, aprons',
  'Pharmaceutical production support equipment',
  'Laboratory glassware and consumables',
  'Custom sourcing for specialized requirements',
]

export default function AboutPage() {
  return (
    <div>
      {/* Page header */}
      <section className="section-pad bg-card border-b border-hairline">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Who We Are</p>
            <h1 className="heading-1 text-ink mb-5">
              Authorized distributor. Canadian incorporated.
            </h1>
            <p className="body-lg">
              Ovux Biotech Solutions sources and distributes laboratory chromatography, analytical instruments, laboratory equipment, and hospital consumables for global buyers in regulated industries.
            </p>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="section-pad bg-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Our Position</p>
              <h2 className="heading-2 text-ink mb-5">Not a broker. An authorized distributor.</h2>
              <p className="text-muted leading-relaxed mb-4">
                The distinction matters to procurement teams in regulated industries. As an authorized distributor, we hold formal agreements with the OEM brand owners we represent. We are accountable to those agreements, which means our buyers can trust the provenance of what they receive.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                We serve pharmaceutical manufacturers, CROs, hospital supply chains, analytical labs, universities, and biotech operations teams who need reliable, compliance-aware sourcing from a partner that understands what is at stake.
              </p>
              <p className="text-muted leading-relaxed">
                Based in Canada, we operate with transparency: we state exactly what we carry, what certifications apply, and what the terms of distribution are. We do not fabricate credentials, client names, or agreement details.
              </p>
            </div>
            <div className="relative h-80 rounded-md overflow-hidden">
              <Image
                src="/images/lab-equipment.jpg"
                alt="Analytical laboratory equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-pad bg-card border-y border-hairline">
        <div className="container-wide">
          <div className="mb-12">
            <p className="eyebrow mb-3">How We Operate</p>
            <h2 className="heading-2 text-ink max-w-sm">Four principles we hold to.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-surface rounded-md p-6 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm bg-accent-tint">
                  <Icon size={18} strokeWidth={1.5} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-sm text-ink mb-1.5">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-pad bg-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Expertise</p>
              <h2 className="heading-2 text-ink mb-5">What we distribute</h2>
              <p className="body-lg mb-8">
                Our distribution portfolio covers the full range of laboratory and clinical supply needs for regulated-industry buyers.
              </p>
              <ul className="space-y-3">
                {expertiseAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span className="text-sm text-muted">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance callout */}
            <div className="bg-accent-tint border border-accent/20 rounded-md p-8">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={16} strokeWidth={1.5} className="text-accent" />
                <p className="font-body font-semibold text-sm text-accent-hover">Distribution policy</p>
              </div>
              <p className="text-sm text-ink leading-relaxed mb-3">
                Ovux Biotech Solutions distributes under authorized agreements and respects all OEM brand restrictions and regulatory requirements applicable to each jurisdiction.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Buyers are encouraged to verify product specifications, applicable certifications, and regulatory compliance requirements for their specific use case and jurisdiction. We will provide all available documentation to support that process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-ink">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl text-white font-medium mb-1">Work with us.</h2>
            <p className="text-sm text-white/50">Submit your requirements and receive a quote within 24 hours.</p>
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
