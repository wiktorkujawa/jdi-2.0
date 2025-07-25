import { Brief } from '@/payload-types'

import { serverURL } from '@/utils/consts'

export const getBriefData = async () => {
  try {
    const briefRes = await fetch(`${serverURL}/read-api/brief`, {
      cache: 'no-store',
      next: {
        tags: ['brief'],
      },
    })
    const brief: Brief = await briefRes.json()
    return brief
  } catch (error) {
    console.error('Error fetching brief:', error)
    return null
  }
}
