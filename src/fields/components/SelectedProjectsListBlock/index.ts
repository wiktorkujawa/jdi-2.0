import type { Block } from 'payload'

import { PROJECT_TYPES } from '@/utils/consts'

import { revalidateProjects } from './hooks/revalidateProjects'

const SelectedProjectsListBlock: Block = {
  slug: 'SelectedProjectsList',
  // imageURL: TODO - add image,
  // imageAltText: TODO - add alt text,
  fields: [
    {
      name: 'header',
      type: 'text',
    },
    {
      name: 'selectFrom',
      type: 'select',
      options: ['type', 'relation'],
      hooks: {
        afterChange: [revalidateProjects],
      },
    },
    {
      name: 'type',
      type: 'select',
      options: PROJECT_TYPES,
      admin: {
        condition: (_, siblingData) => siblingData.selectFrom === 'type',
      },
    },
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.selectFrom === 'relation',
      },
    },
  ],
}

export default SelectedProjectsListBlock
