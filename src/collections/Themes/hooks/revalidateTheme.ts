import { revalidateTag } from 'next/cache'
import { CollectionAfterChangeHook } from 'payload'

import { Theme } from '@/payload-types'

export const revalidateTheme: CollectionAfterChangeHook<Theme> = async () => {
  revalidateTag('theme')
}
