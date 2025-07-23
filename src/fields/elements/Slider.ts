import type { Field } from 'payload'
import Button from './Button'

const Slider: Field[] = [
  {
    name: 'slides',
    type: 'array',
    fields: [
      {
        name: 'media',
        required: true,
        type: 'upload',
        relationTo: 'media',
      },
      {
        name: 'heading',
        type: 'text',
      },
      {
        name: 'copy',
        type: 'richText',
      },
      {
        name: 'attribution',
        type: 'text',
      },
      Button,
    ],
  },
  {
    type: 'group',
    name: 'settings',
    fields: [
      {
        label: 'settings',
        type: 'tabs',
        tabs: [
          {
            label: 'Desktop',
            name: 'desktop',
            fields: [
              {
                name: 'dots',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'loop',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'arrows',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'draggable',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'autoplay',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'autoplaySpeed',
                type: 'number',
                admin: {
                  condition: (_, siblingData) => siblingData.autoplay,
                },
                defaultValue: 3000,
                min: 1000,
              },
              {
                name: 'slidesPerRow',
                type: 'number',
                defaultValue: 1,
                min: 1,
              },
            ],
          },
          {
            label: 'Mobile',
            name: 'mobile',
            fields: [
              {
                name: 'dots',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'loop',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'arrows',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'draggable',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'autoplay',
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'autoplaySpeed',
                type: 'number',
                admin: {
                  condition: (_, siblingData) => siblingData.autoplay,
                },
                defaultValue: 3000,
                min: 1000,
              },
              {
                name: 'slidesPerRow',
                type: 'number',
                defaultValue: 1,
                min: 1,
              },
            ],
          },
        ],
      },
    ],
  },
]

export default Slider
