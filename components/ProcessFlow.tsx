import { MessageSquare, Search, ShieldCheck, Package } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Inquiry',
    description: 'Submit your product requirements, specifications, or part numbers through our quote form.',
  },
  {
    icon: Search,
    title: 'Sourcing & Verification',
    description: 'We source from our authorized supplier network and verify product authenticity and availability.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Check',
    description: 'We review regulatory requirements, OEM terms, and applicable certifications before confirming.',
  },
  {
    icon: Package,
    title: 'Delivery',
    description: 'We arrange international logistics, customs documentation, and track your shipment to delivery.',
  },
]

export default function ProcessFlow() {
  return (
    <section className="section-pad bg-card border-y border-hairline">
      <div className="container-wide">
        <div className="mb-12">
          <p className="eyebrow mb-3">How We Work</p>
          <h2 className="heading-2 text-ink max-w-sm">From inquiry to delivery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-hairline z-0" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-sm bg-accent-tint border border-hairline mb-5">
                <step.icon size={20} strokeWidth={1.5} className="text-accent" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="tabular font-body text-xs font-semibold text-accent/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-body font-semibold text-sm text-ink">{step.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
