import { Metadata } from 'next'

import { Media, Page } from '@/payload-types'

const getImageMetadata = (image?: string | Media | null) => {
  if (image && typeof image === 'object' && image.url) {
    return { images: [{ url: image.url, width: 1200, height: 630 }] }
  }
  return {}
}

export const generateMeta = (meta: Page['meta'], slug: string): Metadata => {
  return {
    title: meta?.title,
    authors: {
      name: 'Wiktor Kujawa',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/${slug}`,
    },
    description: meta?.description || undefined,
    openGraph: {
      title: meta?.title || undefined,
      description: meta?.description || undefined,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/${slug}`,
      creators: '@just-dev-it',
      siteName: 'JUST-DEV-IT',
      ...getImageMetadata(meta?.image),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@just-dev-it',
      title: meta?.title || undefined,
      creator: '@just-dev-it',
      description: meta?.description || undefined,
      ...getImageMetadata(meta?.image),
    },
  }
}
