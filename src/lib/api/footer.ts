import { Footer } from '@/payload-types'

import { serverURL } from '@/utils/consts'

export const getFooterData = async () => {
  const footerRes = await fetch(`${serverURL}/read-api/footer`, {
    cache: 'force-cache',
    next: {
      tags: ['footer'],
    },
  })
  const footer: Footer = await footerRes.json()
  return footer
}
