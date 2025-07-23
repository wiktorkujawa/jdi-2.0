import { Brief } from '@/payload-types'
import { serverURL } from '@/utils/consts'

export const getBriefData = async () => {
  const briefRes = await fetch(`${serverURL}/read-api/brief`, {
    cache: 'force-cache',
    next: {
      tags: ['brief'],
    },
  })
  const brief: Brief = await briefRes.json()
  return brief
}
