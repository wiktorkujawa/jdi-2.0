import { Social } from '@/payload-types'
import { revalidateTag } from 'next/cache'
import { CollectionAfterChangeHook } from 'payload'

export const revalidateSocial: CollectionAfterChangeHook<Social> = async () => {
  revalidateTag('footer')
  revalidateTag('navigation')
}
