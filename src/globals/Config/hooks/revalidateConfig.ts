import { revalidateTag } from 'next/cache'

import { GlobalAfterChangeHook } from 'payload'

export const revalidateConfig: GlobalAfterChangeHook = async () => {
  revalidateTag('config')
}
