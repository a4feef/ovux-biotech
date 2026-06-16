export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Agreement to Terms</h2>
        <p className="text-gray-700 mb-4">
          By accessing and using the Ovux Biotech Solutions website, you accept and agree to be bound 
          by the terms and provision of this agreement. If you do not agree to these terms, please 
          do not use our website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
        <p className="text-gray-700 mb-4">
          Permission is granted to temporarily access the materials on Ovux Biotech Solutions' website 
          for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
          transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
        <p className="text-gray-700 mb-4">
          The materials on Ovux Biotech Solutions' website are provided on an 'as is' basis. Ovux 
          Biotech Solutions makes no warranties, expressed or implied, and hereby disclaims and negates 
          all other warranties including, without limitation, implied warranties or conditions of 
          merchantability, fitness for a particular purpose, or non-infringement of intellectual 
          property or other violation of rights.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Limitations</h2>
        <p className="text-gray-700 mb-4">
          In no event shall Ovux Biotech Solutions or its suppliers be liable for any damages 
          (including, without limitation, damages for loss of data or profit, or due to business 
          interruption) arising out of the use or inability to use the materials on Ovux Biotech 
          Solutions' website, even if Ovux Biotech Solutions or an authorized representative has been 
          notified orally or in writing of the possibility of such damage.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Accuracy of Materials</h2>
        <p className="text-gray-700 mb-4">
          The materials appearing on Ovux Biotech Solutions' website could include technical, 
          typographical, or photographic errors. Ovux Biotech Solutions does not warrant that any 
          of the materials on its website are accurate, complete, or current. Ovux Biotech Solutions 
          may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Links</h2>
        <p className="text-gray-700 mb-4">
          Ovux Biotech Solutions has not reviewed all of the sites linked to its website and is not 
          responsible for the contents of any such linked site. The inclusion of any link does not 
          imply endorsement by Ovux Biotech Solutions of the site. Use of any such linked website is 
          at the user's own risk.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Modifications</h2>
        <p className="text-gray-700 mb-4">
          Ovux Biotech Solutions may revise these terms of service for its website at any time without 
          notice. By using this website you are agreeing to be bound by the then current version of 
          these terms of service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These terms and conditions are governed by and construed in accordance with the laws of 
          Canada and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms of Use, please contact us at:
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> connect@ovuxbiotech.com<br />
          <strong>Address:</strong> Canada
        </p>
      </div>
    </div>
  )
}

