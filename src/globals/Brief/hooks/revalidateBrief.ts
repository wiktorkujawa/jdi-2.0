import { revalidateTag } from 'next/cache'
import { GlobalAfterChangeHook } from 'payload'

export const revalidateBrief: GlobalAfterChangeHook = async () => {
  revalidateTag('brief')
}
