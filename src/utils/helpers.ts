import { RequestContext, TextFieldManyValidation, TextFieldSingleValidation } from 'payload'

import { IMAGE_EXTENSIONS, RAW_EXTENSIONS, VIDEO_EXTENSIONS } from './consts'

export const getResourceType = (ext: string): string => {
  if (VIDEO_EXTENSIONS.includes(ext)) return 'video'
  if (IMAGE_EXTENSIONS.includes(ext)) return 'image'
  if (RAW_EXTENSIONS.includes(ext)) return 'raw'
  return 'auto' // Default to auto for unknown types
}

export const validateSlug = (value: string | null | undefined): true | string => {
  if (value === null || value === undefined) {
    return true // Allow empty/null values
  }
  if (typeof value === 'string') {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)
      ? true
      : 'Slug must contain only lowercase letters, numbers, and hyphens'
  }
  return 'Invalid slug format'
}
