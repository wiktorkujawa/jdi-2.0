import { revalidateTag } from 'next/cache'

import { GlobalAfterChangeHook } from 'payload'

export const revalidateEducation: GlobalAfterChangeHook = async () => {
  revalidateTag('education')
}
