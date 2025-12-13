import React from 'react'

import { Footer } from './components/organisms/Footer'
import { Header } from './components/organisms/Header'

// import './css/style.css'

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col bg-linear-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900"
        data-theme="default"
      >
        <Header />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
