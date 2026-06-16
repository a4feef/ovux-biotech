import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ovuxbiotech.com'),
  title: 'Ovux Biotech Solutions | Authorized Distributor of Laboratory & Analytical Equipment',
  description: 'Canadian-based authorized distributor of chromatography systems, analytical instruments, laboratory equipment, and hospital consumables. Serving global markets with compliance-aware sourcing.',
  keywords: 'authorized distributor, chromatography, HPLC, GC columns, analytical instruments, laboratory equipment, hospital consumables, Canada, Thermo Fisher, Waters, Agilent, Shimadzu',
  icons: {
    icon: '/logo/ovux-icon.png',
    shortcut: '/logo/ovux-icon.png',
    apple: '/logo/ovux-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Ovux Biotech Solutions',
    title: 'Ovux Biotech Solutions | Authorized Distributor',
    description: 'Canadian-based authorized distributor of laboratory chromatography, analytical instruments, and hospital consumables. Global markets, compliance-aware sourcing.',
    images: [{ url: '/images/hero-lab-equipment.jpg', width: 1200, height: 630, alt: 'Ovux Biotech Solutions laboratory equipment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ovux Biotech Solutions | Authorized Distributor',
    description: 'Canadian-based authorized distributor of laboratory and analytical equipment for global markets.',
    images: ['/images/hero-lab-equipment.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Ovux Biotech Solutions',
      url: 'https://ovuxbiotech.com',
      logo: 'https://ovuxbiotech.com/logo/ovux-logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'connect@ovuxbiotech.com',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CA',
      },
      description: 'Canadian-based authorized distributor of laboratory chromatography, analytical instruments, laboratory equipment, and hospital consumables, serving global markets.',
    },
    {
      '@type': 'LocalBusiness',
      name: 'Ovux Biotech Solutions',
      image: 'https://ovuxbiotech.com/images/hero-lab-equipment.jpg',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CA',
      },
      email: 'connect@ovuxbiotech.com',
      url: 'https://ovuxbiotech.com',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-surface text-ink antialiased">
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
