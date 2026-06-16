import Link from 'next/link'
import { ShieldCheck, Lock } from 'lucide-react'

const productLinks = [
  { label: 'Chromatography & Analytical', href: '/products/chromatography-analytical' },
  { label: 'Laboratory Equipment', href: '/products/laboratory-equipment' },
  { label: 'Pharma Production Support', href: '/products/pharma-production-support' },
  { label: 'Hospital Consumables', href: '/products/custom-sourcing' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Chromatography', href: '/chromatography' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Cookie Notice', href: '/cookies' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <p className="font-body font-semibold text-white text-sm mb-3">Ovux Biotech Solutions</p>
            <p className="text-sm leading-relaxed mb-5">
              Canadian-incorporated authorized distributor of laboratory chromatography, analytical instruments, and hospital consumables, serving global markets.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <ShieldCheck size={13} strokeWidth={1.5} />
              <span>Authorized Distributor</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40 mt-1.5">
              <Lock size={13} strokeWidth={1.5} />
              <span>Secure inquiry handling</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="font-body font-semibold text-white text-xs tracking-widest uppercase mb-4">Products</p>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-body font-semibold text-white text-xs tracking-widest uppercase mb-4">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-body font-semibold text-white text-xs tracking-widest uppercase mb-4">Legal</p>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Ovux Biotech Solutions. All rights reserved.</p>
          <p>Canadian incorporated. Based in Canada, serving global markets.</p>
        </div>
      </div>
    </footer>
  )
}
