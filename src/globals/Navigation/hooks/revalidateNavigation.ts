import { revalidateTag } from 'next/cache'

import { GlobalAfterChangeHook } from 'payload'

export const revalidateNavigation: GlobalAfterChangeHook = async () => {
  revalidateTag('navigation')
}
