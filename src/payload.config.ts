import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Media, Pages, Projects, Skills, Socials, Themes, Users } from './collections'
import { Brief, Config, Education, Experience, Footer, Navigation, ProjectList } from './globals'
import { cloudinaryPlugin } from './utils/cloudinaryPlugin'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, Socials, Projects, Themes, Skills],
  globals: [Navigation, Footer, ProjectList, Experience, Education, Brief, Config],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    cloudinaryPlugin(),
    payloadCloudPlugin(),
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => {
        return `just-dev-it.com — ${doc?.title}`
      },
      generateDescription: () => {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      generateURL: ({ doc }) => `https://just-dev-it.com/${doc?.slug}`,
    }),
  ],
})
