import type { CollectionConfig } from 'payload'
import { revalidatePage } from './hooks/revalidatePage'
import MastheadSlider from '@/fields/elements/MastheadSlider'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidatePage]
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      unique: true,
    },
    {
      name: 'content',
      type: 'richText',
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
        { label: 'None', value: 'none' },
        { label: 'Slider', value: 'slider' },
        { label: 'Banner', value: 'banner' }
      ]
    },
    MastheadSlider,
    // {
    //   name: 'subpages',
    //   type: 'relationship',
    //   relationTo: 'pages',
    //   hasMany: true
    // }
  ],
}