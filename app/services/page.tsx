export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Comprehensive sourcing and supply chain solutions for pharmaceutical and laboratory equipment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="card">
          <div className="text-4xl mb-4">🌍</div>
          <h2 className="text-2xl font-bold mb-4">Global Sourcing</h2>
          <p className="text-gray-700 mb-4">
            Leverage our extensive global network of verified suppliers to access a wide range of 
            pharmaceutical and laboratory equipment. We handle the complexity of international 
            sourcing, quality verification, and logistics.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
            <li>Supplier verification and quality checks</li>
            <li>Multi-region sourcing capabilities</li>
            <li>Cost-effective procurement solutions</li>
            <li>Supply chain risk management</li>
          </ul>
        </div>

        <div className="card">
          <div className="text-4xl mb-4">⚖️</div>
          <h2 className="text-2xl font-bold mb-4">Regulatory-Aware Supply</h2>
          <p className="text-gray-700 mb-4">
            We understand the critical importance of regulatory compliance in pharmaceutical and 
            laboratory operations. Our approach ensures awareness of applicable regulations and 
            helps you maintain compliance.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
            <li>Regulatory requirement assessment</li>
            <li>Compliance documentation support</li>
            <li>OEM restriction awareness</li>
            <li>Quality and certification verification</li>
          </ul>
        </div>

        <div className="card">
          <div className="text-4xl mb-4">📦</div>
          <h2 className="text-2xl font-bold mb-4">Logistics & Shipping</h2>
          <p className="text-gray-700 mb-4">
            Efficient logistics and shipping services to ensure your equipment arrives on time and 
            in perfect condition, regardless of your location.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
            <li>International shipping coordination</li>
            <li>Customs documentation support</li>
            <li>Temperature-controlled shipping (when required)</li>
            <li>Tracking and delivery confirmation</li>
          </ul>
        </div>

        <div className="card">
          <div className="text-4xl mb-4">👥</div>
          <h2 className="text-2xl font-bold mb-4">Account Management</h2>
          <p className="text-gray-700 mb-4">
            Dedicated account management to provide personalized service, responsive support, and 
            ongoing relationship management.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
            <li>Dedicated account representative</li>
            <li>Responsive communication and support</li>
            <li>Regular order status updates</li>
            <li>Long-term partnership development</li>
          </ul>
        </div>
      </div>

      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Custom Sourcing Solutions</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Have specialized equipment needs? Our custom sourcing service can help you find unique 
          or hard-to-source items. Contact us to discuss your specific requirements.
        </p>
        <a href="/contact" className="btn-primary">
          Request Custom Sourcing
        </a>
      </div>
    </div>
  )
}

