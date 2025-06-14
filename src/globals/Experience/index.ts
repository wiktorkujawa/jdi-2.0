import type { GlobalConfig } from 'payload'
import { revalidateExperience } from './hooks/revalidateExperience'

export const Experience: GlobalConfig = {
  slug: "experience",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateExperience]
  },
  fields: [
    {
      type: "text",
      name: 'header'
    },
    {
      type: 'array',
      name: 'positions',
      fields: [
        {
          type: 'text',
          name: 'position'
        },
        {
          type: 'textarea',
          name: 'description'
        }
      ]
    }
  ],
}; 