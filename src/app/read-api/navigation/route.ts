import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.findGlobal({
    slug: 'navigation',
    depth: 4,
    select: {
      page: true,
      pages: true,
    },
    populate: {
      pages: {
        subpages: true,
        slug: true,
        title: true,
      }
    }
  })

  return Response.json(data)
}
