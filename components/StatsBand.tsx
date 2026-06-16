// TODO(afif): replace placeholder values below with verified figures

const stats = [
  { value: '30+', label: 'Countries served' },
  { value: '12', label: 'Product categories' },
  { value: '8', label: 'OEM brand agreements' },
  { value: '24h', label: 'Quote response SLA' },
]

export default function StatsBand() {
  return (
    <section className="section-pad-sm bg-ink">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="tabular font-heading text-4xl font-medium text-white mb-1">{s.value}</p>
              <p className="font-body text-sm text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
