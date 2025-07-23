import { Project } from '@/payload-types'
import { revalidateTag } from 'next/cache'
import { CollectionAfterChangeHook } from 'payload'

export const revalidateProject: CollectionAfterChangeHook<Project> = async () => {
  revalidateTag('projectsList')
}
