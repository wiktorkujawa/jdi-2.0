import { RAW_EXTENSIONS, IMAGE_EXTENSIONS, VIDEO_EXTENSIONS } from './consts'

export const getResourceType = (ext: string): string => {
  if (VIDEO_EXTENSIONS.includes(ext)) return 'video'
  if (IMAGE_EXTENSIONS.includes(ext)) return 'image'
  if (RAW_EXTENSIONS.includes(ext)) return 'raw'
  return 'auto' // Default to auto for unknown types
}
