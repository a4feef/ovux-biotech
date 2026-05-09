import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'How to Launch a Halal Supplement Brand in Canada | Ovux Biotech Solutions',
  description: 'The complete step-by-step guide to building a compliant, profitable halal supplement brand in Canada — from certification to shelf.',
}

const chapters = [
  { num: 1, title: 'Understanding the Canadian Natural Health Product Market' },
  { num: 2, title: 'What Makes a Supplement "Halal"? Standards & Requirements' },
  { num: 3, title: 'Choosing the Right Halal Certification Body' },
  { num: 4, title: 'Health Canada Regulations & the NPN Licensing Process' },
  { num: 5, title: 'Sourcing Halal-Certified Raw Materials & Ingredients' },
  { num: 6, title: 'Working with Contract Manufacturers: What to Verify' },
  { num: 7, title: 'Product Formulation, Testing & Quality Assurance' },
  { num: 8, title: 'Label Compliance: Claims, Bilingualism & Halal Marks' },
  { num: 9, title: 'Building Your Brand Identity and Packaging' },
  { num: 10, title: 'Pricing Strategy, Margins & Financial Planning' },
  { num: 11, title: 'Sales Channels: DTC, Retail, Wholesale & Export' },
  { num: 12, title: 'Marketing, Launch Strategy & Scaling Your Brand' },
]

const audiences = [
  {
    icon: '🕌',
    title: 'Muslim Entrepreneurs',
    desc: 'You want to build a business that serves the halal market and aligns with your values.',
  },
  {
    icon: '📦',
    title: 'Existing Supplement Brands',
    desc: 'You already sell supplements and want to add halal-certified products to your line.',
  },
  {
    icon: '🌍',
    title: 'Importers & Distributors',
    desc: 'You source or distribute health products and see the growing demand for halal options.',
  },
  {
    icon: '🚀',
    title: 'First-Time Founders',
    desc: "You have a product idea but need a clear roadmap through Canada's regulatory landscape.",
  },
]

export default function EbookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-shrink-0 w-56 md:w-72 shadow-2xl rounded-lg overflow-hidden">
              <Image
                src="/images/ebook-cover.jpg"
                alt="How to Launch a Halal Supplement Brand in Canada — ebook cover"
                width={400}
                height={560}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                New Release
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                How to Launch a Halal Supplement Brand in Canada
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                By <span className="font-semibold text-primary-700">Ovux Biotech Solutions</span>
              </p>
              <p className="text-gray-700 text-lg mb-8 max-w-xl">
                A practical, end-to-end guide covering certification, Health Canada compliance,
                sourcing, manufacturing, and go-to-market strategy — everything you need to
                confidently launch a halal supplement brand in Canada.
              </p>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                <div className="text-4xl font-bold text-gray-900">$49<span className="text-xl font-normal text-gray-500"> CAD</span></div>
                <a href="#buy" className="btn-primary text-base py-3 px-8">Get the Ebook</a>
              </div>
              <p className="text-sm text-gray-500 mt-3">Instant PDF download. 12 chapters. 100% actionable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The halal supplement market in Canada is growing — and largely underserved.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Canada's Muslim population is one of the fastest-growing demographics in the country,
            yet most supplement brands on store shelves haven't been formulated or certified with
            halal consumers in mind. This guide gives you the full picture — from understanding
            what halal certification actually requires, to navigating Health Canada's Natural
            Product Number (NPN) process, to finding the right contract manufacturer and getting
            your product to market. Whether you're starting from zero or expanding an existing
            line, this is the roadmap you need.
          </p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">What's Inside</h2>
            <p className="text-gray-600">12 chapters. No fluff. Just the information you need to move forward.</p>
          </div>
          <ol className="space-y-3">
            {chapters.map((ch) => (
              <li key={ch.num} className="flex items-start gap-4 bg-white rounded-lg px-5 py-4 shadow-sm border border-gray-100">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">
                  {ch.num}
                </span>
                <span className="text-gray-800 font-medium pt-0.5">{ch.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Who This Is For</h2>
            <p className="text-gray-600">This guide is written for people who are serious about building a real business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((item) => (
              <div key={item.title} className="card border border-gray-100 flex gap-4">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy section */}
      <section id="buy" className="py-20 bg-primary-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build your brand?</h2>
          <p className="text-primary-100 text-lg mb-8">Get the complete guide and start moving with clarity and confidence.</p>
          <div className="bg-white rounded-2xl shadow-xl p-8 inline-block w-full">
            <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-2">One-time purchase</p>
            <div className="text-5xl font-bold text-gray-900 mb-1">$49</div>
            <p className="text-gray-500 mb-6">CAD — instant PDF download</p>
            <ul className="text-gray-700 text-sm space-y-2 mb-8 text-left max-w-xs mx-auto">
              <li className="flex items-center gap-2"><span className="text-primary-600 font-bold">✓</span> 12 full chapters</li>
              <li className="flex items-center gap-2"><span className="text-primary-600 font-bold">✓</span> Health Canada NPN process walkthrough</li>
              <li className="flex items-center gap-2"><span className="text-primary-600 font-bold">✓</span> Halal certification body comparison</li>
              <li className="flex items-center gap-2"><span className="text-primary-600 font-bold">✓</span> Supplier vetting checklist</li>
              <li className="flex items-center gap-2"><span className="text-primary-600 font-bold">✓</span> Label compliance guide</li>
            </ul>
            <a href="#" className="btn-primary w-full text-center block text-base py-4" aria-label="Buy the ebook — link coming soon">
              Buy Now — $49 CAD
            </a>
            <p className="text-xs text-gray-400 mt-3">Secure checkout via Gumroad. Instant download after purchase.</p>
          </div>
        </div>
      </section>
    </>
  )
}