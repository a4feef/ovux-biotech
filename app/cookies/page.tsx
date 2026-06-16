export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Cookie Notice</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What Are Cookies</h2>
        <p className="text-gray-700 mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit 
          a website. Cookies are widely used to make websites work more efficiently and to provide 
          information to website owners.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Cookies</h2>
        <p className="text-gray-700 mb-4">
          Ovux Biotech Solutions uses cookies for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function 
          properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
          <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact 
          with our website by collecting and reporting information anonymously.</li>
          <li><strong>Functional Cookies:</strong> These cookies allow the website to remember choices 
          you make and provide enhanced, personalized features.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Types of Cookies We Use</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mt-6 mb-3">Session Cookies</h3>
          <p className="text-gray-700 mb-4">
            These are temporary cookies that are deleted when you close your browser. They are used to 
            maintain your session while you navigate through the website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Persistent Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies remain on your device for a set period or until you delete them. They are 
            used to remember your preferences and improve your experience on our website.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Cookies</h2>
        <p className="text-gray-700 mb-4">
          In addition to our own cookies, we may also use various third-party cookies to report usage 
          statistics of the website and deliver advertisements. These third parties may set their own 
          cookies to collect information about your online activities across different websites.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Managing Cookies</h2>
        <p className="text-gray-700 mb-4">
          You can control and manage cookies in various ways. Please keep in mind that removing or 
          blocking cookies can impact your user experience and parts of our website may no longer be 
          fully accessible.
        </p>
        <p className="text-gray-700 mb-4">Most browsers allow you to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>See what cookies you have and delete them individually</li>
          <li>Block third-party cookies</li>
          <li>Block cookies from particular sites</li>
          <li>Block all cookies from being set</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Consent</h2>
        <p className="text-gray-700 mb-4">
          By continuing to use our website, you consent to our use of cookies as described in this 
          Cookie Notice. If you do not agree to our use of cookies, you should set your browser 
          settings accordingly or not use our website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Cookie Notice</h2>
        <p className="text-gray-700 mb-4">
          We may update this Cookie Notice from time to time to reflect changes in the cookies we use 
          or for other operational, legal, or regulatory reasons. Please revisit this Cookie Notice 
          regularly to stay informed about our use of cookies.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about our use of cookies, please contact us at:
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> connect@ovuxbiotech.com<br />
          <strong>Address:</strong> Canada
        </p>
      </div>
    </div>
  )
}

