import { Footer } from '@/payload-types'

import { serverURL } from '@/utils/consts'

export const getFooterData = async () => {
  try {
    const footerRes = await fetch(`${serverURL}/read-api/footer`, {
      cache: 'force-cache',
      next: {
        tags: ['footer'],
      },
    })
    const footer: Footer = await footerRes.json()
    return footer
  } catch (error) {
    console.error('Error fetching footer:', error)
    return null
  }
}
