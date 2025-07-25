import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { STATIC_PAGES } from '@/utils/consts'

export const GET = async () => {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.find({
      collection: 'pages',
      where: {
        and: [
          {
            slug: {
              exists: true,
            },
          },
          {
            slug: {
              not_equals: null,
            },
          },
          {
            slug: {
              not_like: '/',
            },
          },
          {
            slug: {
              not_in: STATIC_PAGES,
            },
          },
        ],
      },
    })

    return Response.json(data)
  } catch (error) {
    console.error('Error fetching top-level pages:', error)
    return Response.json({ error: 'Error fetching top-level pages' }, { status: 500 })
  }
}
