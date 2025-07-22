import configPromise from '@payload-config'
import { NextRequest } from 'next/server'
import { getPayload } from 'payload'

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise <{ slug: string | string[] }> }
) => {

  const { slug } = await params;

  console.log('WTF slug',slug);

  const joinedSlug = Array.isArray(slug) ? slug.join('/') : slug;

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: joinedSlug === 'home' ? "" : joinedSlug,
      },
    },
  });

  if (!data.docs[0]) {
    return Response.json({ error: 'Page not found' }, { status: 404 })
  }

  return Response.json(data.docs[0]);
}
