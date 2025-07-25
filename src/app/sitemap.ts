import { MetadataRoute } from 'next'

import { getPagesData } from '@/lib/api/pages'

const relativeLink = (link: string) => (link[0] == '/' ? link : `/${link}`)

const getPages = async () => {
  const data = await getPagesData()

  if (!data) {
    return []
  }

  return data.docs.map(({ slug, updatedAt }) => ({
    url: process.env.NEXT_PUBLIC_APP_URL + relativeLink(slug || ''),
    lastModified: updatedAt,
    changeFrequency: 'monthly',
    priority: 1.0,
  })) as MetadataRoute.Sitemap
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPaths = await getPages()
  return allPaths
}
