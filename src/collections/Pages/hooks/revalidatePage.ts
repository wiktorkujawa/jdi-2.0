import { revalidatePath } from 'next/cache'

import { CollectionAfterChangeHook } from 'payload'

import { Page } from '@/payload-types'

import { formatSlug } from '@/utils/formatSlug'

export const revalidatePage: CollectionAfterChangeHook<Page> = async ({ doc }) => {
  const slug = formatSlug(doc.slug || '')
  revalidatePath(slug)
}
