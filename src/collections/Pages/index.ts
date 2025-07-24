import type { CollectionConfig } from 'payload'

import {
  HeadingBlock,
  HeadingCopyBlock,
  IFrameBlock,
  ProjectsListBlock,
  QuoteBlock,
  SelectedProjectsListBlock,
  SliderBlock,
  WYSIWYGBlock,
} from '@/fields/components'
import MastheadSlider from '@/fields/elements/MastheadSlider'

import { revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidatePage],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'isMasthead',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'feature',
      admin: {
        condition: (data) => data.isMasthead,
      },
      type: 'select',
      defaultValue: 'slider',
      options: [
        { label: 'Slider', value: 'slider' },
        { label: 'Banner', value: 'banner' },
      ],
    },
    MastheadSlider,
    {
      name: 'customComponents',
      type: 'blocks',
      maxRows: 20,
      blocks: [
        WYSIWYGBlock,
        QuoteBlock,
        HeadingCopyBlock,
        HeadingBlock,
        SliderBlock,
        ProjectsListBlock,
        IFrameBlock,
        SelectedProjectsListBlock,
      ],
    },
    {
      name: 'subpages',
      type: 'relationship',
      relationTo: 'pages',
      hasMany: true,
    },
  ],
}
