import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.findGlobal({
      slug: 'brief',
    })

    return Response.json(data)
  } catch (error) {
    console.error('Error fetching brief:', error)
    return Response.json({ error: 'Error fetching brief' }, { status: 500 })
  }
}
