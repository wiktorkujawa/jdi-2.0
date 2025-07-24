import { Education } from '@/payload-types'

import { serverURL } from '@/utils/consts'

export const getEducationData = async () => {
  const educationRes = await fetch(`${serverURL}/read-api/education`, {
    cache: 'force-cache',
    next: {
      tags: ['education'],
    },
  })
  const education: Education = await educationRes.json()
  return education
}
