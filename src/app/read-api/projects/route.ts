import { NextRequest } from 'next/server'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { PROJECT_TYPES } from '@/utils/consts'

export const GET = async (request: NextRequest) => {
  const type = request?.nextUrl?.searchParams.get('type') as
    | (typeof PROJECT_TYPES)[number]
    | undefined
    | null

  const payload = await getPayload({
    config: configPromise,
  })
  const whereClause = type ? { where: { type: { in: [type] } } } : {}

  const data = await payload.find({
    collection: 'projects',
    ...whereClause,
  })

  return Response.json(data)
}
