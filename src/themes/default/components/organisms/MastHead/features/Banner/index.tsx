import Image from 'next/image'

import { Page } from '@/payload-types'

type BannerProps = Pick<Page, 'title' | 'meta'>

export default function Banner({ title, meta }: BannerProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[500px] md:min-h-[600px] overflow-hidden rounded-2xl">
      {meta?.image && typeof meta.image === 'object' && meta.image.url && (
        <div className="absolute inset-0">
          <Image
            src={meta.image.url}
            alt={meta.image.alt || title || 'Banner image'}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-indigo-900/60 via-purple-900/60 to-pink-900/60"></div>
        </div>
      )}
      <div className="relative z-10 text-center text-white p-8 max-w-4xl mx-auto">
        {title && <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">{title}</h1>}
        {meta?.description && (
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            {meta.description}
          </p>
        )}
      </div>
    </div>
  )
}
