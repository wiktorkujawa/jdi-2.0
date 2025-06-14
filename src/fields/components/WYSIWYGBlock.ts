import type { Block } from 'payload';

const WYSIWYGBlock: Block = {
  slug: 'WYSIWYG',
  // imageURL: TODO - add image,
  imageAltText: 'WYSIWYG component',
  fields: [
    {
      name: 'copy',
      type: 'richText',
      required: true,
    }
  ]
};

export default WYSIWYGBlock;