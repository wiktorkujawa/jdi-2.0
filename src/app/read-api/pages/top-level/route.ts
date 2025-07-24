import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { STATIC_PAGES } from '@/utils/consts'

export const GET = async () => {
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
}
