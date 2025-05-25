import configPromise from '@payload-config'
import { NextRequest } from 'next/server'
import { getPayload } from 'payload'

export const GET = async (req: NextRequest) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: req.nextUrl.pathname,
      },
    },
  })

  return Response.json(data)
}
