'use client'

import { useState } from 'react'
import { HomeIcon, UserIcon, SettingsIcon, MenuIcon, CloseIcon } from '../../../../../assets/svg'

interface NavigationBarProps {
  className?: string
}

export const NavigationBar = ({ className = '' }: NavigationBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { icon: HomeIcon, label: 'Home', href: '/' },
    { icon: UserIcon, label: 'Profile', href: '/profile' },
    { icon: SettingsIcon, label: 'Settings', href: '/settings' },
  ]

  return (
    <nav className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Logo
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <item.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
} 