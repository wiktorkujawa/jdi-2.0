import type { GlobalConfig } from 'payload'

import Button from '@/fields/elements/Button'

import { revalidateProjectList } from './hooks/revalidateProjectList'

export const ProjectList: GlobalConfig = {
  slug: 'projectList',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateProjectList],
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      label: 'Media URL',
      name: 'mediaUrl',
      type: 'text',
    },
    Button,
    {
      type: 'relationship',
      relationTo: 'projects',
      name: 'projectsList',
      hasMany: true,
    },
  ],
}
