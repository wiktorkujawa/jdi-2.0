import { getFooterData } from '@/lib/api/footer';
import { SocialMedia } from '@/themes/default/components/molecules/SocialMedia'

export const Footer = async () => {

  const data = await getFooterData();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Company Name
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Building amazing digital experiences with modern web technologies.
            </p>
            {data?.socials && <SocialMedia data={data.socials} />}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              {data?.emails?.map((emailItem, index) => (
                <p key={index}>{emailItem.email}</p>
              )) || <p>contact@company.com</p>}
              
              {data?.phone?.map((phoneItem, index) => (
                <p key={index}>{phoneItem.number}</p>
              )) || <p>+1 (555) 123-4567</p>}
              
              {data?.address && (
                <p>
                  {data.address.street}, {data.address.city}, {data.address.country}
                </p>
              ) || <p>123 Main St, City, State</p>}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2024 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 