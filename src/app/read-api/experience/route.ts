import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.findGlobal({
      slug: 'experience',
    })

    return Response.json(data)
  } catch (error) {
    console.error('Error fetching experience:', error)
    return Response.json({ error: 'Error fetching experience' }, { status: 500 })
  }
}
