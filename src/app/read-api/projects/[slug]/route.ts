import { NextRequest } from 'next/server'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (_: NextRequest, { params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  const payload = await getPayload({
    config: configPromise,
  })

  const project = await payload.find({
    collection: 'projects',
    where: {
      slug: { equals: slug },
    },
  })

  if (!project.docs[0]) {
    return Response.json({ error: 'Project not found' }, { status: 404 })
  }

  return Response.json(project.docs[0])
}
