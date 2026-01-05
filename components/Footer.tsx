import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Ovux Biotech Solutions</h3>
            <p className="text-sm">
              Global sourcing of pharmaceutical and laboratory equipment for regulated industries worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/chromatography-analytical" className="hover:text-white transition-colors">Chromatography & Analytical</Link></li>
              <li><Link href="/products/laboratory-equipment" className="hover:text-white transition-colors">Laboratory Equipment</Link></li>
              <li><Link href="/products/pharma-production-support" className="hover:text-white transition-colors">Pharma Production Support</Link></li>
              <li><Link href="/products/custom-sourcing" className="hover:text-white transition-colors">Custom Sourcing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Notice</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ovux Biotech Solutions. All rights reserved.</p>
          <p className="mt-2">Based in Canada | Serving Global Markets</p>
        </div>
      </div>
    </footer>
  )
}

