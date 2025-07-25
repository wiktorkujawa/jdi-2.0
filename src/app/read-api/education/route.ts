import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.findGlobal({
      slug: 'education',
    })

    return Response.json(data)
  } catch (error) {
    console.error('Error fetching education:', error)
    return Response.json({ error: 'Error fetching education' }, { status: 500 })
  }
}
