import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, ShieldCheck, Truck, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Ovux Biotech Solutions',
  description: 'Global sourcing, compliance-aware supply, international logistics, and dedicated account management for regulated laboratory and pharmaceutical procurement.',
}

const services = [
  {
    icon: Globe,
    title: 'Global Sourcing',
    desc: 'We leverage our authorized supplier network to source laboratory and clinical equipment across multiple regions, managing quality verification and logistics end to end.',
    points: [
      'Authorized supplier network across multiple regions',
      'Supplier verification and authenticity checks',
      'Cost-effective procurement for volume or specialist orders',
      'Supply chain risk awareness',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-Aware Supply',
    desc: 'We understand what is at stake in regulated industries. Our sourcing process accounts for applicable GMP, FDA, and ISO requirements before any order is confirmed.',
    points: [
      'Regulatory requirement assessment per jurisdiction',
      'Compliance documentation support',
      'OEM restriction review before confirmation',
      'Certification verification and traceability support',
    ],
  },
  {
    icon: Truck,
    title: 'Logistics & Shipping',
    desc: 'International shipping coordination from our Canadian base, including customs documentation and, where required, temperature-controlled freight.',
    points: [
      'International shipping coordination',
      'Customs and import documentation support',
      'Temperature-controlled shipping where required',
      'Shipment tracking through to delivery',
    ],
  },
  {
    icon: Users,
    title: 'Account Management',
    desc: 'Direct access to a dedicated representative throughout your procurement cycle. No automated queues for order queries, quote follow-ups, or technical questions.',
    points: [
      'Dedicated account representative',
      'Responsive communication on quotes and orders',
      'Order status updates through the cycle',
      'Long-term supply partnership development',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Page header */}
      <section className="section-pad bg-card border-b border-hairline">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">What We Offer</p>
            <h1 className="heading-1 text-ink mb-5">
              Full-cycle procurement support for regulated industries.
            </h1>
            <p className="body-lg">
              From inquiry to delivery, we manage every step of the sourcing process so your team can focus on operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad bg-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, desc, points }) => (
              <div key={title} className="card-surface rounded-md p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-accent-tint flex-shrink-0">
                    <Icon size={18} strokeWidth={1.5} className="text-accent" />
                  </div>
                  <h2 className="font-body font-semibold text-base text-ink">{title}</h2>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2.5">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span className="text-sm text-muted">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom sourcing CTA */}
      <section className="section-pad bg-ink">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-accent-tint/70 mb-4">Custom Sourcing</p>
              <h2 className="heading-2 text-white mb-5">Have a specialist requirement?</h2>
              <p className="text-white/60 leading-relaxed text-sm mb-8">
                Hard-to-source reagents, high-volume hospital consumables, or instruments outside our standard catalogue - tell us what you need and we will assess feasibility through our network. No fabricated availability claims: if we cannot source it, we will say so.
              </p>
              <Link href="/contact" className="btn-primary">
                Discuss your requirement
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Inquiry received', sub: 'Quote form or email to our Canadian team' },
                { label: 'Feasibility assessed', sub: 'We check availability and compliance before responding' },
                { label: 'Quote issued', sub: 'Detailed quote with lead time and logistics estimate' },
                { label: 'Order confirmed', sub: 'We coordinate sourcing, compliance, and delivery' },
              ].map((step, i) => (
                <div key={step.label} className="flex gap-4 items-start">
                  <span className="tabular font-body text-xs font-semibold text-accent/50 pt-0.5 w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-body text-sm font-medium text-white">{step.label}</p>
                    <p className="text-xs text-white/40">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
