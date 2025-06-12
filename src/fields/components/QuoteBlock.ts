import type { Block } from 'payload';

const QuoteBlock: Block = {
  slug: 'Quote',
  // imageURL: TODO - add image,
  // imageAltText: TODO - add alt text,
  fields: [
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'quote',
      type: 'text',
      required: true,
    },
    {
      name: 'decoration',
      type: 'checkbox'
    },
  ]
};

export default QuoteBlock;