import React from 'react'
import './css/style.css'
import Footer from './components/organisms/Footer'
import Header from './components/organisms/Header'

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body data-theme="legacy">
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    )
}