import type { CollectionConfig } from 'payload'
import { revalidateSocial } from './hooks/revalidateSocial'
export const Socials: CollectionConfig = {
  slug: 'socials',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateSocial],
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'select',
      unique: true,
      options: [
        {
          label: 'Linkedin',
          value: 'linkedin',
        },
        {
          label: 'Github',
          value: 'github',
        },
        {
          label: 'StackOverflow',
          value: 'stackoverflow',
        },
      ],
    },
    {
      name: 'url',
      type: 'text',
      unique: true,
    },
  ],
}
