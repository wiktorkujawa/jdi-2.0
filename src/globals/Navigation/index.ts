import { GlobalConfig } from 'payload'
import { revalidateNavigation } from './hooks/revalidateNavigation'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateNavigation],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Pages',
          description: 'Already defined pages',
          fields: [
            {
              name: 'page',
              type: 'relationship',
              hasMany: true,
              unique: true,
              relationTo: 'pages',
            },
          ],
        },
        {
          label: 'Custom menu',
          description: 'Custom navigation',
          fields: [
            {
              type: 'array',
              name: 'pages',
              fields: [
                {
                  name: 'slug',
                  type: 'text',
                  unique: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  unique: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'relationship',
      hasMany: true,
      relationTo: 'socials',
      name: 'socials',
    },
  ],
}
