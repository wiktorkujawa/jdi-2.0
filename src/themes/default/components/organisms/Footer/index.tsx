import Link from 'next/link'

import { Page } from '@/payload-types'

import { getFooterData } from '@/lib/api/footer'
import { getHeaderData } from '@/lib/api/header'
import { CustomPage } from '@/utils/types'

import SocialMedia from '../../molecules/SocialMedia'

const relativeLink = (link: string) => (link[0] === '/' ? link : `/${link}`)

export const Footer = async () => {
  const data = await getFooterData()
  const navData = await getHeaderData()
  const nav = navData ? [...(navData.page as Page[]), ...(navData.pages as CustomPage[])] : []

  return (
    <footer className="relative bg-linear-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Building amazing digital experiences with modern web technologies. Crafting scalable,
              effective, and user-centric solutions.
            </p>
            {data?.socials && <SocialMedia data={data.socials} />}
          </div>

          {/* Quick Links – tylko strony z nawigacji (CMS) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Home
                </Link>
              </li>
              {nav.map((page) => {
                const href = relativeLink(page.slug || '')
                const label: string =
                  ('title' in page && typeof page.title === 'string' && page.title) ||
                  ('name' in page && typeof page.name === 'string' && page.name) ||
                  (typeof page.slug === 'string' && page.slug) ||
                  ''
                if (!href || href === '/') return null
                return (
                  <li key={page.id || href}>
                    <Link
                      href={href}
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              {data?.emails?.map((emailItem, index) => (
                <a
                  key={index}
                  href={`mailto:${emailItem.email}`}
                  className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  {emailItem.email}
                </a>
              ))}

              {data?.phone?.map((phoneItem, index) => (
                <a
                  key={index}
                  href={`tel:+${phoneItem.number}`}
                  className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  {`+${phoneItem.number}`.match(/.{1,3}/g)?.map((item, index) => (
                    <span className="pr-2" key={index}>
                      {item}
                    </span>
                  ))}
                </a>
              )) || (
                <a
                  href="tel:+15551234567"
                  className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  +1 (555) 123-4567
                </a>
              )}

              {(data?.address && (
                <p className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                  {data.address.street}, {data.address.city}, {data.address.country}
                </p>
              )) || (
                <p className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                  123 Main St, City, State
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
