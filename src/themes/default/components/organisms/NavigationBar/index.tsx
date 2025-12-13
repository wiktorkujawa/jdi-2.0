'use client'

import { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsx from 'clsx'

import { Page } from '@/payload-types'

import { CloseIcon, MenuIcon } from '@/assets/svg'
import { CustomPage } from '@/utils/types'

import { DarkModeToggle } from '../../molecules/DarkMode/DarkModeToggle'

interface NavigationBarProps {
  nav: (Page | CustomPage)[]
  className?: string
}

const relativeLink = (link: string) => (link[0] === '/' ? link : `/${link}`)

const NavigationBar = ({ nav, className = '' }: NavigationBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className={`transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="shrink-0">
              <Link href="/" aria-label="Homepage">
                <h1 className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  Portfolio
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {nav.map((page) => {
                const href = relativeLink(page.slug || '')
                const isActive = pathname === href
                const pageTitle =
                  ('title' in page && page.title) || ('name' in page && page.name) || 'Untitled'

                return (
                  <Link
                    key={page.id || page.slug}
                    href={href}
                    className={clsx(
                      'group flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative',
                      isActive
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
                    )}
                  >
                    {String(pageTitle)}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    )}
                  </Link>
                )
              })}
            </div>
            <div className="ml-4 flex items-center space-x-4">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <CloseIcon className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              ) : (
                <MenuIcon className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
            {nav.map((page) => {
              const href = relativeLink(page.slug || '')
              const isActive = pathname === href
              const pageTitle =
                ('title' in page && page.title) || ('name' in page && page.name) || 'Untitled'

              return (
                <Link
                  key={page.id || page.slug}
                  href={href}
                  className={clsx(
                    'group flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {String(pageTitle)}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavigationBar
