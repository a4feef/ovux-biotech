import { ShieldCheck, Globe, Truck, MapPin } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'Authorized Distributor' },
  { icon: ShieldCheck, label: 'Compliance-aware sourcing' },
  { icon: Truck, label: 'Global logistics' },
  { icon: MapPin, label: 'Canadian incorporated' },
]

export default function TrustBar() {
  return (
    <div className="bg-card border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 py-3.5 px-4 first:pl-0 last:pr-0">
              <Icon size={14} strokeWidth={1.5} className="text-accent flex-shrink-0" />
              <span className="font-body text-xs text-muted whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
