import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
    select: {
      slug: true,
      updatedAt: true,
    },
  })

  return Response.json(data)
}
