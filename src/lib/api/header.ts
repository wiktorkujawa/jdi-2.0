import { Navigation } from '@/payload-types'

import { serverURL } from '@/utils/consts'

export const getHeaderData = async () => {
  try {
    const headerRes = await fetch(`${serverURL}/read-api/navigation`, {
      cache: 'no-store',
      next: {
        tags: ['navigation'],
      },
    })
    const header: Navigation = await headerRes.json()
    return header
  } catch (error) {
    console.error('Error fetching header:', error)
    return null
  }
}
