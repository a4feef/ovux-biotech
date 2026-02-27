import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ovux Biotech Solutions | Global Pharmaceutical & Laboratory Equipment Supply',
  description: 'Global sourcing of pharmaceutical and laboratory equipment. Specializing in chromatography solutions, analytical instruments, and compliance-aware supply for regulated industries.',
  keywords: 'pharmaceutical equipment, laboratory equipment, HPLC, GC, chromatography, biotech supply, Canada',
  icons: {
    icon: '/logo/ovux-icon.png',
    shortcut: '/logo/ovux-icon.png',
    apple: '/logo/ovux-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

