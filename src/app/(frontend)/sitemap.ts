import { getPagesData } from '@/lib/api/pages'
import { MetadataRoute } from 'next'

const relativeLink = (link: string) => (link[0] == '/' ? link : `/${link}`)

const getPages = async () => {
  const { docs } = await getPagesData()

  return docs.map(({ slug, updatedAt }) => ({
    url: process.env.APP_URL + relativeLink(slug || ''),
    lastModified: updatedAt,
    changeFrequency: 'monthly',
    priority: 1.0,
  })) as MetadataRoute.Sitemap
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPaths = await getPages()
  return allPaths
}
