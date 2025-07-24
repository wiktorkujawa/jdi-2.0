import Image from 'next/image'

import { Page } from '@/payload-types'

type BannerProps = Pick<Page, 'title' | 'meta'>

export default function Banner({ title, meta }: BannerProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[400px]">
      {meta?.image && typeof meta.image === 'object' && meta.image.url && (
        <div className="absolute inset-0">
          <Image
            src={meta.image.url}
            alt={meta.image.alt || title || 'Banner image'}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="relative z-10 text-center text-white p-8">
        {title && <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>}
        {meta?.description && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{meta.description}</p>
        )}
      </div>
    </div>
  )
}
