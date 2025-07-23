import type { GlobalConfig } from 'payload'
import { revalidateEducation } from './hooks/revalidateEducation'

export const Education: GlobalConfig = {
  slug: 'education',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateEducation],
  },
  fields: [
    {
      type: 'text',
      name: 'header',
    },
    {
      type: 'array',
      name: 'institutions',
      fields: [
        {
          type: 'text',
          name: 'name',
        },
        {
          type: 'textarea',
          name: 'description',
        },
      ],
    },
  ],
}
