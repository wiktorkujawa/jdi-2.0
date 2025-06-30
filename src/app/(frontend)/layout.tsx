import React from 'react'
import '@/assets/css/global.css'
import DynamicTheme from '@/themes/themeMapper'
import { getConfig } from '@/lib/api/config'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}


export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const config = await getConfig()

  const themeName = config?.selectedTheme?.name || 'default'

  return <DynamicTheme theme={themeName}>{children}</DynamicTheme>
}
