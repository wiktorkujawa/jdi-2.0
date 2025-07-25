import type { Block } from 'payload'

const HeadingBlock: Block = {
  slug: 'Heading',
  // imageURL: TODO - add image,
  imageAltText: 'Heading Block component',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'heading',
        },
        {
          type: 'select',
          name: 'align',
          defaultValue: 'left',
          options: [
            {
              value: 'left',
              label: 'Left',
            },
            {
              value: 'center',
              label: 'Center',
            },
            {
              value: 'right',
              label: 'Right',
            },
          ],
        },
        {
          type: 'select',
          name: 'level',
          options: [
            {
              value: 'h1',
              label: 'h1',
            },
            {
              value: 'h2',
              label: 'h2',
            },
            {
              value: 'h3',
              label: 'h3',
            },
            {
              value: 'h4',
              label: 'h4',
            },
            {
              value: 'h5',
              label: 'h5',
            },
          ],
        },
      ],
    },
  ],
}

export default HeadingBlock
