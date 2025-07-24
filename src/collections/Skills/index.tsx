import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      required: true,
      label: 'Skill Name',
    },
    {
      type: 'upload',
      name: 'icon',
      relationTo: 'media',
    },
  ],
}
