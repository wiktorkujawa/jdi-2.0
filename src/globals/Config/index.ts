import type { GlobalConfig } from 'payload'

import { revalidateConfig } from './hooks/revalidateConfig'

export const Config: GlobalConfig = {
  slug: 'config',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateConfig],
  },
  fields: [
    {
      type: 'relationship',
      name: 'selectedTheme',
      relationTo: 'themes',
      hasMany: false,
    },
  ],
}
