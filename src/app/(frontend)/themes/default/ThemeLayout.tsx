import React from 'react'
import './css/style.css'

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body data-theme="default">
                <main>{children}</main>
            </body>
        </html>
    )
}