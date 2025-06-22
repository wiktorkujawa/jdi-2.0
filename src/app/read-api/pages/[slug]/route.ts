import configPromise from '@payload-config'
import { NextRequest } from 'next/server'
import { getPayload } from 'payload'

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise <{ slug: string }> }
) => {

  const { slug } = await params;

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug === 'home' ? "" : slug,
      },
    },
  });

  if (!data.docs[0]) {
    return Response.json({ error: 'Page not found' }, { status: 404 })
  }

  return Response.json(data.docs[0]);
}
