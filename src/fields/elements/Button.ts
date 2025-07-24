import type { Field } from 'payload'

const Button: Field = {
  name: 'button',
  type: 'group',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'target',
      type: 'select',
      defaultValue: '_self',
      options: [
        {
          label: '_self',
          value: '_self',
        },
        {
          label: '_blank',
          value: '_blank',
        },
        {
          label: '_parent',
          value: '_parent',
        },
        {
          label: '_top',
          value: '_top',
        },
      ],
    },
    {
      name: 'ariaLabel',
      type: 'text',
    },
  ],
}

export default Button
