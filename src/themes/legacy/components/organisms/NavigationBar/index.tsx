'use client'

import { useState } from 'react'
import { HomeIcon, UserIcon, SettingsIcon, MenuIcon, CloseIcon } from '@/assets/svg'

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
    <nav className={`bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 shadow-lg transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">
                Legacy Logo
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
                  className="group flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-cyan-100 hover:bg-cyan-600 dark:hover:bg-cyan-800 transition-all duration-200"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-100 hover:bg-cyan-600 dark:hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cyan-600 dark:bg-cyan-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-100 hover:bg-cyan-700 dark:hover:bg-cyan-800 transition-all duration-200"
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