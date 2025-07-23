import type { CollectionConfig } from 'payload'
import { revalidateTheme } from './hooks/revalidateTheme'

export const Themes: CollectionConfig = {
  slug: 'themes',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateTheme],
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      required: true,
      label: 'Theme Name',
    },
    {
      type: 'text',
      name: 'description',
      required: false,
      access: {
        read: ({ req }) => !!req.user,
      },
    },
  ],
}
