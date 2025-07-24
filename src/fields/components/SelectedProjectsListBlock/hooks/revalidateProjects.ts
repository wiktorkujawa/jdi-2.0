import { revalidateTag } from 'next/cache'

import { FieldHook } from 'payload'

export const revalidateProjects: FieldHook = async () => {
  revalidateTag('projects-block')
}
