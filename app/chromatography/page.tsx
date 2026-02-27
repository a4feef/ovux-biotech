import Image from 'next/image'
import Link from 'next/link'

export default function ChromatographyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">HPLC & Chromatography Solutions</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Specialized sourcing for chromatography equipment and consumables, with a focus on compatible 
          and alternative solutions.
        </p>
      </div>

      <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
        <Image
          src="/images/hplc-column.jpg"
          alt="HPLC chromatography column"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <h2 className="text-2xl font-bold mt-8 mb-4">Chromatography Expertise</h2>
        <p className="text-gray-700 mb-4">
          Chromatography is a critical analytical technique in pharmaceutical manufacturing, quality 
          control, and research. We understand the importance of reliable, high-performance equipment 
          and consumables for HPLC (High-Performance Liquid Chromatography) and GC (Gas Chromatography) 
          applications.
        </p>
        <p className="text-gray-700 mb-4">
          Our global sourcing network enables us to provide access to a wide range of chromatography 
          products, including columns, solvents, standards, and related consumables, while maintaining 
          awareness of OEM restrictions and regulatory requirements.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Compliant Alternatives</h2>
        <p className="text-gray-700 mb-4">
          We work with suppliers who provide:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li><strong>Compatible Columns:</strong> HPLC and GC columns designed for compatibility 
          with various instrument systems</li>
          <li><strong>Quality Consumables:</strong> Vials, caps, syringes, and other chromatography 
          consumables meeting industry standards</li>
          <li><strong>Standards & Reagents:</strong> Analytical standards and solvents suitable for 
          chromatography applications</li>
          <li><strong>Accessories:</strong> Tubing, filters, and other accessories for chromatography 
          systems</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/hplc-column.jpg"
                alt="HPLC column"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">HPLC Columns</h3>
            <p className="text-gray-600 text-sm">
              Compatible HPLC columns for various analytical applications, including reversed-phase, 
              normal-phase, and specialized chemistries.
            </p>
          </div>
          <div className="card">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/gc-column.jpg"
                alt="GC column"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">GC Columns</h3>
            <p className="text-gray-600 text-sm">
              Gas chromatography columns and related consumables for analytical and preparative 
              applications.
            </p>
          </div>
          <div className="card">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/lab-glassware.jpg"
                alt="Laboratory glassware"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">Chromatography Consumables</h3>
            <p className="text-gray-600 text-sm">
              Vials, caps, syringes, filters, and other consumables essential for chromatography workflows.
            </p>
          </div>
          <div className="card">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/lab-equipment.jpg"
                alt="Laboratory equipment"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">Accessories & Parts</h3>
            <p className="text-gray-600 text-sm">
              Tubing, connectors, seals, and other accessories for chromatography system maintenance 
              and operation.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Quality & Compliance</h2>
        <p className="text-gray-700 mb-4">
          All products we source undergo quality verification to ensure they meet industry standards. 
          We work with you to understand your specific requirements, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>Regulatory compliance requirements (FDA, EMA, etc.)</li>
          <li>Instrument compatibility specifications</li>
          <li>Performance and quality standards</li>
          <li>Certification and documentation needs</li>
        </ul>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-8">
          <h3 className="font-semibold text-lg mb-2">Ready to Get Started?</h3>
          <p className="text-gray-700 mb-4">
            Contact us to discuss your chromatography equipment and consumable needs. Our team can 
            help you find compatible solutions that meet your requirements.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

