import Image from 'next/image'
import NextLink from 'next/link'

import clsx from 'clsx'

import { Media, Project } from '@/payload-types'

import { TABLET_WIDTH } from '@/utils/consts'

import LazyVideo from '../../atoms/LazyVideo'
import Link from '../../atoms/Link'

import styles from './ProjectItem.module.css'

const ProjectItem = (field: Project) => {
  const media = field.media as Media

  if (!media || typeof media === 'string') {
    return null
  }

  const resourceType = media.mimeType?.includes('video') ? 'video' : 'image'
  const originalFilename = media.filename || ''

  const { description, name, buttons, mediaUrl } = field

  return (
    <article className={clsx(styles['m-project-item'], 'text-center lg:w-1/2 px-2 w-full')}>
      <figure>
        <NextLink target="_blank" href={mediaUrl || '#'}>
          <h3 className={clsx(styles['m-project-item--header'])}>Project </h3>
          <h4 title={name || ''} className="text-h3 font-bold mb-4 line-clamp-1">
            {name}
          </h4>

          {resourceType === 'video' ? (
            <div className="overflow-hidden">
              <LazyVideo
                src={media.url || ''}
                type={media.mimeType || 'video/mp4'}
                poster={media.thumbnailURL || ''}
                alt={media.alt || ''}
                className="lazy aspect-2/1 object-contain mx-auto hover:scale-150 transition-transform"
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
        <p
          title={description || ''}
          className="text-left mt-4 line-clamp-4 min-h-24 whitespace-pre-line"
        >
          {description}
        </p>

        <div className="flex flex-wrap justify-between">
          {buttons?.map(({ button }) => {
            return (
              <Link
                key={button.url}
                aria-label={button.text}
                href={button.url}
                target="_blank"
                className="w-full flex justify-center lg:w-auto mx-auto"
              >
                {button.text}
              </Link>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default ProjectItem
