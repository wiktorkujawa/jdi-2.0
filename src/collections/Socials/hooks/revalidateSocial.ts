import { revalidateTag } from 'next/cache'

import { CollectionAfterChangeHook } from 'payload'

import { Social } from '@/payload-types'

export const revalidateSocial: CollectionAfterChangeHook<Social> = async () => {
  revalidateTag('footer')
  revalidateTag('navigation')
}
