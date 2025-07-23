import { formatSlug } from '@/utils/formatSlug'
import { Page } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { CollectionAfterChangeHook } from 'payload'

export const revalidatePage: CollectionAfterChangeHook<Page> = async ({ doc }) => {
  const slug = formatSlug(doc.slug || '')
  revalidatePath(slug)
}
