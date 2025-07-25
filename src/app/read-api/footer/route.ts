import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.findGlobal({
      slug: 'footer',
    })

    return Response.json(data)
  } catch (error) {
    console.error('Error fetching footer:', error)
    return Response.json({ error: 'Error fetching footer' }, { status: 500 })
  }
}
