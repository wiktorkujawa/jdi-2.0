import type { Block } from 'payload';

const IFrameBlock: Block = {
  slug: 'IFrame',
  // imageURL: TODO - add image,
  imageAltText: 'IFrame Block component',
  fields: [
    {
      type: 'text',
      name: 'url',
      label: 'URL'
    },
    {
      type: 'checkbox',
      defaultValue: false,
      name: 'frameControls',
      label: 'Frame controls'
    },
    {
      type: 'checkbox',
      defaultValue: false,
      name: 'lockKeyboard',
      label: 'Lock keyboard'
    }
  ]
};

export default IFrameBlock;