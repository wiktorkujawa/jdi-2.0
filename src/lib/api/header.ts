import { Navigation } from '@/payload-types'

import { serverURL } from '@/utils/consts'

export const getHeaderData = async () => {
  const headerRes = await fetch(`${serverURL}/read-api/navigation`, {
    cache: 'force-cache',
    next: {
      tags: ['navigation'],
    },
  })
  const header: Navigation = await headerRes.json()
  return header
}
