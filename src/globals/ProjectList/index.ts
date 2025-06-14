import type { GlobalConfig } from 'payload'
import { revalidateProjectList } from './hooks/revalidateProjectList'
import Button from '@/fields/elements/Button'

export const ProjectList: GlobalConfig = {
  slug: "projectList",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateProjectList]
  },
  fields: [
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
    {
      label: "Media URL",
      name: "mediaUrl",
      type: "text",
    },
    Button,
    {
      type: "relationship",
      relationTo: "projects",
      name: "projectsList",
      hasMany: true,
    },
  ],
}; 