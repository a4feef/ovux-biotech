export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
        <p className="text-gray-700 mb-4">
          Ovux Biotech Solutions ("we," "our," or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you visit our website and use our services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
        <p className="text-gray-700 mb-4">
          We may collect personal information that you provide to us, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>Name and contact information (email address, phone number, mailing address)</li>
          <li>Company name and business information</li>
          <li>Information provided in RFQ (Request for Quote) forms</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
        <p className="text-gray-700 mb-4">
          When you visit our website, we may automatically collect certain information, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>IP address and location data</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website addresses</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>Process and respond to your RFQ requests</li>
          <li>Provide, maintain, and improve our services</li>
          <li>Communicate with you about products, services, and updates</li>
          <li>Comply with legal obligations</li>
          <li>Protect our rights and prevent fraud</li>
          <li>Analyze website usage and improve user experience</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing and Disclosure</h2>
        <p className="text-gray-700 mb-4">
          We do not sell, trade, or rent your personal information to third parties. We may share 
          your information only in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>With service providers who assist us in operating our website and conducting our business</li>
          <li>When required by law or to protect our rights</li>
          <li>In connection with a business transfer or merger</li>
          <li>With your consent</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement appropriate technical and organizational measures to protect your personal 
          information against unauthorized access, alteration, disclosure, or destruction. However, 
          no method of transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
        <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing of your information</li>
          <li>Request data portability</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
        <p className="text-gray-700 mb-4">
          We use cookies and similar tracking technologies to track activity on our website. You 
          can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by 
          posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> info@ovuxbiotech.com<br />
          <strong>Address:</strong> Canada
        </p>
      </div>
    </div>
  )
}

