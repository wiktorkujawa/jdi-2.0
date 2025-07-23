import type { GlobalConfig } from 'payload'

import { revalidateExperience } from './hooks/revalidateExperience'
import { MIN_EXPERIENCE_YEAR } from '@/utils/consts'

export const Experience: GlobalConfig = {
  slug: 'experience',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateExperience],
  },
  fields: [
    {
      type: 'text',
      name: 'header',
    },
    {
      type: 'array',
      name: 'positions',
      fields: [
        {
          type: 'text',
          name: 'position',
        },
        {
          type: 'text',
          name: 'company',
        },
        {
          type: 'select',
          name: 'startDate',
          defaultValue: new Date().getFullYear(),
          options: Array.from(
            { length: new Date().getFullYear() - MIN_EXPERIENCE_YEAR + 1 },
            (_, i) => ({
              label: `${MIN_EXPERIENCE_YEAR + i}`,
              value: `${MIN_EXPERIENCE_YEAR + i}`,
            }),
          ),
        },
        {
          type: 'select',
          name: 'endDate',
          defaultValue: 'now',
          options: [
            ...Array.from(
              { length: new Date().getFullYear() - MIN_EXPERIENCE_YEAR + 1 },
              (_, i) => ({
                label: `${MIN_EXPERIENCE_YEAR + i}`,
                value: `${MIN_EXPERIENCE_YEAR + i}`,
              }),
            ),
            {
              label: 'Now',
              value: 'now',
            },
          ],
        },
        {
          type: 'textarea',
          name: 'description',
        },
      ],
    },
  ],
}
