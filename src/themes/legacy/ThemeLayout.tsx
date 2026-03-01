import React from 'react'

import { Figtree } from 'next/font/google'

import Footer from './components/organisms/Footer'
import Header from './components/organisms/Header'

const figtree = Figtree({
  subsets: ['latin'],
})

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
