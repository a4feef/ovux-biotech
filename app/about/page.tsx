import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About Ovux Biotech Solutions</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 mb-6">
          Ovux Biotech Solutions is a Canadian-based company specializing in global sourcing of 
          pharmaceutical and laboratory equipment for regulated industries worldwide.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Founded with a mission to bridge the gap between pharmaceutical manufacturers, analytical 
          laboratories, and quality equipment suppliers, Ovux Biotech Solutions has established itself 
          as a trusted partner in the global biotech supply chain.
        </p>
        <p className="text-gray-700 mb-4">
          We understand the unique challenges faced by pharmaceutical manufacturers, CROs, universities, 
          and biotech companies in sourcing reliable, compliant equipment and consumables. Our team 
          leverages extensive industry knowledge and a global network to provide solutions that meet 
          the highest standards of quality and regulatory compliance.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Global Sourcing Philosophy</h2>
        <p className="text-gray-700 mb-4">
          Our approach to global sourcing is built on three core principles:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li><strong>Quality Assurance:</strong> We work with verified suppliers and conduct 
          thorough quality checks to ensure all products meet industry standards.</li>
          <li><strong>Regulatory Awareness:</strong> We stay current with international regulations 
          and help our clients navigate compliance requirements.</li>
          <li><strong>Transparency:</strong> We provide clear information about product origins, 
          specifications, and compatibility to help you make informed decisions.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Compliance Statement</h2>
        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-6">
          <p className="text-gray-700 mb-4">
            <strong>Important:</strong> Ovux Biotech Solutions is a global sourcing company. We do not 
            claim to be an authorized distributor or OEM partner of any specific manufacturer. Our 
            services focus on providing compatible and alternative solutions while respecting OEM 
            restrictions and regulatory requirements.
          </p>
          <p className="text-gray-700">
            We work within the bounds of applicable laws and regulations, and we encourage our clients 
            to verify all product specifications, certifications, and regulatory compliance for their 
            specific use cases and jurisdictions.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Expertise</h2>
        <p className="text-gray-700 mb-4">
          While we source equipment across multiple categories, we have particular expertise in:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>Chromatography systems and consumables (HPLC, GC, and related equipment)</li>
          <li>Analytical laboratory instruments and accessories</li>
          <li>Pharmaceutical production support equipment</li>
          <li>Laboratory glassware and consumables</li>
          <li>Custom sourcing for specialized requirements</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Global Network</h3>
            <p className="text-gray-600 text-sm">
              Extensive supplier relationships across multiple regions enable us to source products 
              efficiently and cost-effectively.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Industry Knowledge</h3>
            <p className="text-gray-600 text-sm">
              Deep understanding of pharmaceutical and laboratory equipment requirements, regulations, 
              and best practices.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Reliable Service</h3>
            <p className="text-gray-600 text-sm">
              Dedicated account management and responsive support to ensure smooth procurement processes.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Compliance Focus</h3>
            <p className="text-gray-600 text-sm">
              Commitment to regulatory awareness and helping clients maintain compliance in their 
              operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

