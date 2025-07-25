import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  try {
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
  } catch (error) {
    console.error('Error fetching pages:', error)
    return Response.json({ error: 'Error fetching pages' }, { status: 500 })
  }
}
