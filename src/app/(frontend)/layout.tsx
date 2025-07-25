import React from 'react'

import { Metadata, Viewport } from 'next'

import '@/assets/css/global.css'
import { getConfig } from '@/lib/api/config'
import DynamicTheme from '@/themes/themeMapper'

export const metadata: Metadata = {
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/manifest.json`,
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#030303' },
    { media: '(prefers-color-scheme: light)', color: '#dae0e6' },
  ],
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const config = await getConfig()

  const themeName = config?.selectedTheme?.name || 'default'

  return <DynamicTheme theme={themeName}>{children}</DynamicTheme>
}
