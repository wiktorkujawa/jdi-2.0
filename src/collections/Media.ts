import type { CollectionConfig } from 'payload'
import { getResourceType } from '@/utils/helpers'

type MediaDoc = {
  createdAt: string
  updatedAt: string
  alt: string
  filename: string
  mimeType: string
  filesize: number
  id: string
  _isLocked: boolean
  _userEditing: null
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  // upload: true,
  upload: {
    adminThumbnail: ({ doc }) => {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME
      const fromattedDoc = doc as MediaDoc

      if (fromattedDoc?.mimeType?.includes('video')) {
        const publicId = `media/${fromattedDoc?.filename?.replace(/\.[^/.]+$/, '')}`
        return `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.webp`
      } else {
        const resourceType = getResourceType(fromattedDoc?.filename?.split('.').pop() || '')
        const publicId = `media/${fromattedDoc?.filename?.replace(/\.[^/.]+$/, '')}`
        return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${publicId}.webp`
      }
    },
  },
}
