import { revalidateTag } from 'next/cache'

import { CollectionAfterChangeHook } from 'payload'

import { Project } from '@/payload-types'

export const revalidateProject: CollectionAfterChangeHook<Project> = async () => {
  revalidateTag('projects-list')
  revalidateTag('projects-block')
}
