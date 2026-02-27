'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Logo: small icon + "Ovux Biotech Solutions" text (no large logo image)
function LogoWithFallback() {
  const [iconError, setIconError] = useState(false)

  return (
    <>
      {/* Small logo icon */}
      {!iconError && (
        <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
          <Image
            src="/logo/ovux-icon.png"
            alt=""
            width={48}
            height={48}
            className="object-contain"
            priority
            onError={() => setIconError(true)}
          />
        </div>
      )}
      {/* Text beside the logo */}
      <span className="text-xl md:text-2xl font-bold text-primary-600 whitespace-nowrap">
        <span className="md:hidden">OVUX</span>
        <span className="hidden md:inline">Ovux Biotech Solutions</span>
      </span>
    </>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity">
              {/* Try to load logo, fallback to text if not found */}
              <LogoWithFallback />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-600 transition-colors">
              Products
            </Link>
            <Link href="/chromatography" className="text-gray-700 hover:text-primary-600 transition-colors">
              Chromatography
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              About Us
            </Link>
            <Link href="/products" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Products
            </Link>
            <Link href="/chromatography" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Chromatography
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Services
            </Link>
            <Link href="/contact" className="block px-3 py-2 bg-primary-600 text-white rounded text-center">
              Request Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

