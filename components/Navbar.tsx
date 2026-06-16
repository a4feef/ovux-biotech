'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Chromatography', href: '/chromatography' },
  { label: 'Brands', href: '/brands' },
  { label: 'Services', href: '/services' },
]

function Logo() {
  const [iconError, setIconError] = useState(false)

  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Ovux Biotech Solutions home">
      {!iconError && (
        <div className="relative h-9 w-9 flex-shrink-0">
          <Image
            src="/logo/ovux-icon.png"
            alt=""
            width={36}
            height={36}
            className="object-contain"
            priority
            onError={() => setIconError(true)}
          />
        </div>
      )}
      <span className="font-body font-semibold text-ink text-sm tracking-tight whitespace-nowrap">
        <span className="md:hidden">Ovux Biotech</span>
        <span className="hidden md:inline">Ovux Biotech Solutions</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-card border-b border-hairline sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-muted hover:text-ink transition-colors duration-150 relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
              Request a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-muted hover:text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-sm p-1"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-hairline pb-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm text-muted hover:text-ink hover:bg-surface rounded-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center text-xs py-2.5">
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
