import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Spec {
  label: string
  value: string
}

interface SpecCardProps {
  name: string
  category: string
  specs: Spec[]
  imageSrc?: string
  imageAlt?: string
}

export default function SpecCard({ name, category, specs, imageSrc, imageAlt }: SpecCardProps) {
  return (
    <div className="card-surface rounded-md overflow-hidden flex flex-col">
      {imageSrc && (
        <div className="relative h-44 bg-surface">
          {/* TODO(afif): replace with final product image */}
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <p className="eyebrow mb-1">{category}</p>
        <h3 className="font-body font-semibold text-sm text-ink mb-4">{name}</h3>

        <dl className="space-y-2 mb-5 flex-1">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between items-baseline gap-4 border-b border-hairline pb-2 last:border-0">
              <dt className="text-xs text-muted">{spec.label}</dt>
              <dd className="tabular text-xs font-medium text-ink text-right">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <Link
          href="/contact"
          className="btn-outline text-xs py-2 px-4 w-full justify-center"
        >
          Request Quote
          <ArrowRight size={13} strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  )
}
