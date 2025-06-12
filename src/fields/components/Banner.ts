import type { Block } from 'payload';

const Banner: Block = {
  slug: 'Banner',
  // imageURL: TODO - add image,
  // imageAltText: TODO - add alt text,
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        {
          label: 'fire',
          value: 'fire'
        },
        {
          label: 'new',
          value: 'new'
        },
      ]
    },
    {
      name: 'decoration',
      type: 'select',
      options: [
        {
          label: 'fire',
          value: 'fire'
        },
        {
          label: 'new',
          value: 'new'
        },
      ]
    },
  ]
};

export default Banner;