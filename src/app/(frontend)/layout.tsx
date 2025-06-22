import React from 'react'
import './css/global.css'
import DynamicTheme from './themes/themeMapper'
import { serverURL } from '@/utils/consts'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const getConfig = async () => {
  try {

    const req = await fetch(`${serverURL}/read-api/config?depth=1`, {
      cache: 'force-cache',
      next: { tags: ['config'] },
    })
    return req.json()
  } catch (error) {
    console.error('Error fetching config:', error)
    return null
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const config = await getConfig()

  const themeName = config?.selectedTheme?.name || 'default'

  return <DynamicTheme theme={themeName}>{children}</DynamicTheme>
}
