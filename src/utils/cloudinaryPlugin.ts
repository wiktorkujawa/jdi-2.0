import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import type { HandleDelete, HandleUpload } from '@payloadcms/plugin-cloud-storage/types'
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary'

import { getResourceType } from '@/utils/helpers'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  transformation: [
    { quality: 'auto', fetch_format: 'auto' },
    { if: 'w_gt_1000', width: 1000 },
  ],
})

const cloudinaryAdapter = () => ({
  name: 'cloudinary-adapter',
  async handleUpload({ file }: Parameters<HandleUpload>[0]) {
    try {
      const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: 'auto',
            public_id: `media/${file.filename.split('.').slice(0, -1).join('')}`,
            overwrite: false,
            use_filename: true,
          },
          (error, result) => {
            if (error) return reject(error)
            if (!result) return reject(new Error('No result returned from Cloudinary'))
            resolve(result)
          },
        )
        uploadStream.end(file.buffer)
      })
      file.filename = uploadResult.public_id
      file.mimeType = `${uploadResult.format}`
      file.filesize = uploadResult.bytes
    } catch (err) {
      console.error('Upload Error', err)
    }
  },

  async handleDelete({ filename }: Parameters<HandleDelete>[0]) {
    try {
      const resourceType = getResourceType(filename.split('.').pop() || '')
      await cloudinary.uploader.destroy(`media/${filename.split('.').slice(0, -1).join('')}`, {
        resource_type: resourceType,
      })
    } catch (error) {
      // if something error occured we will catch the error and respond the error in console
      console.error('Cloudinary Delete Error:', error)
    }
  },
  staticHandler() {
    return new Response('Not implemented', { status: 501 })
  },
})

export const cloudinaryPlugin = () =>
  cloudStoragePlugin({
    collections: {
      media: {
        adapter: cloudinaryAdapter,
        disableLocalStorage: true,
        generateFileURL: ({ filename }) => {
          const resourceType = getResourceType(filename.split('.').pop() || '')

          return cloudinary.url(`media/${filename.split('.').slice(0, -1).join('')}`, {
            secure: true,
            resource_type: resourceType,
          })
        },
      },
    },
  })
