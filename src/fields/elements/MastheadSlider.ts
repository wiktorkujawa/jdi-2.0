import type { Field } from 'payload'

import Slider from './Slider'

const MastheadSlider: Field = {
  name: 'mastheadSlider',
  type: 'group',
  admin: {
    condition: (data) => data.isMasthead && data.feature === 'slider',
  },
  fields: Slider,
}

export default MastheadSlider
