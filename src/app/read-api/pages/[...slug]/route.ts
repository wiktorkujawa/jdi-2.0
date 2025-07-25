import { NextRequest } from 'next/server'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise<{ slug: string | string[] }> },
) => {
  try {
    const { slug } = await params

    const joinedSlug = Array.isArray(slug) ? slug.join('/') : slug

    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: joinedSlug === 'home' ? '' : joinedSlug,
        },
      },
    })

    if (!data.docs[0]) {
      return Response.json({ error: 'Page not found' }, { status: 404 })
    }

    return Response.json(data.docs[0])
  } catch (error) {
    console.error('Error fetching page:', error)
    return Response.json({ error: 'Error fetching page' }, { status: 500 })
  }
}
