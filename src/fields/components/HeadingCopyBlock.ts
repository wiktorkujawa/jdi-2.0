import type { Block } from 'payload';

const HeadingCopyBlock: Block = {
  slug: 'HeadingCopyBlock',
  // imageURL: TODO - add image,
  imageAltText: 'Heading Copy Block component',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'heading'
        },
        {
          type: 'select',
          name: 'level',
          options: [
            {
              value: 'h1',
              label: 'h1'
            },
            {
              value: 'h2',
              label: 'h2'
            },
            {
              value: 'h3',
              label: 'h3'
            },
            {
              value: 'h4',
              label: 'h4'
            },
            {
              value: 'h5',
              label: 'h5'
            }
          ]
        }
      ]
    },
    {
      name: 'copy',
      type: 'richText'
    }
  ]
};

export default HeadingCopyBlock;