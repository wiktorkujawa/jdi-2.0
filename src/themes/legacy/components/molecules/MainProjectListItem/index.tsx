import Image from 'next/image'
import NextLink from 'next/link'

import clsx from 'clsx'

import { Media, ProjectList } from '@/payload-types'

import { TABLET_WIDTH } from '@/utils/consts'

import LazyVideo from '../../atoms/LazyVideo'
import Link from '../../atoms/Link'

import styles from './MainProjectListItem.module.css'

const MainProjectListItem = (field: Omit<ProjectList, 'projectsList'>) => {
  const media = field.media as Media

  if (!media || typeof media === 'string') {
    return null
  }

  const resourceType = media.mimeType?.includes('video') ? 'video' : 'image'
  const originalFilename = media.filename || ''

  const { mediaUrl, button } = field

  return (
    <article className={clsx(styles['m-project-list-item'], 'text-center px-2 w-full')}>
      <figure>
        <NextLink target="_blank" href={mediaUrl || '#'}>
          {resourceType === 'video' ? (
            <div className="overflow-hidden">
              <LazyVideo
                src={media.url || ''}
                type={media.mimeType || 'video/mp4'}
                poster={media.thumbnailURL || ''}
                className="aspect-2/1 object-cover mx-auto hover:scale-150 transition-transform w-full"
                muted
              />
            </div>
          ) : (
            <div className="aspect-2/1 relative overflow-hidden">
              <Image
                fill
                src={media.filename || ''}
                sizes={`(max-width: ${TABLET_WIDTH}px) 100vw, 50vw`}
                className="object-contain mx-auto hover:scale-150 transition-transform"
                alt={originalFilename}
              />
            </div>
          )}
        </NextLink>
      </figure>

      <div className="flex flex-col justify-between">
        <div className="flex flex-wrap justify-between">
          <Link
            aria-label={button.text}
            href={button.url}
            target="_blank"
            className="w-full flex justify-center mx-auto"
          >
            {button.text}
          </Link>
        </div>
      </div>
    </article>
  )
}

export default MainProjectListItem
