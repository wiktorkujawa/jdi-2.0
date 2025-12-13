import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { Media, Project } from '@/payload-types'

import { TABLET_WIDTH } from '@/utils/consts'

import Button from '../../atoms/Button'

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
    <article
      className={clsx(
        styles['m-project-item'],
        'group card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full',
      )}
    >
      <figure className="relative overflow-hidden bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <Link target="_blank" href={mediaUrl || '#'} className="block">
          {resourceType === 'video' ? (
            <div className="overflow-hidden aspect-[16/9]">
              <video
                poster={media.thumbnailURL || ''}
                className="lazy w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                autoPlay
                muted
                loop
                playsInline
                src={media.url || ''}
              />
            </div>
          ) : (
            <div className="aspect-[16/9] relative overflow-hidden">
              <Image
                fill
                src={media.filename || ''}
                sizes={`(max-width: ${TABLET_WIDTH}px) 100vw, 50vw`}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                alt={originalFilename}
              />
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h4
            title={name || ''}
            className="absolute bottom-4 left-4 right-4 z-10 text-xl font-bold text-white line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          >
            {name}
          </h4>
        </Link>
      </figure>

      <div className="p-6 flex flex-col flex-grow">
        <h4
          title={name || ''}
          className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
        >
          {name}
        </h4>

        {description && (
          <p
            title={description || ''}
            className="text-gray-600 dark:text-gray-300 text-left line-clamp-3 mb-6 flex-grow leading-relaxed"
          >
            {description}
          </p>
        )}

        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-auto">
            {buttons.map(({ button }) => {
              return (
                <Link
                  key={button.url}
                  href={button.url}
                  target="_blank"
                  className="flex-1 min-w-[120px]"
                >
                  <Button aria-label={button.text} variant="primary" className="w-full">
                    {button.text}
                  </Button>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectItem
