import React from 'react'
import './css/style.css'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body data-theme="default">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}