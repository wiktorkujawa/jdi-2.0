import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { Media, ProjectList } from '@/payload-types'

import { TABLET_WIDTH } from '@/utils/consts'

import Button from '../../atoms/Button'

import styles from './ProjectListItem.module.css'

const ProjectListItem = (field: Omit<ProjectList, 'projectsList'>) => {
  const media = field.media as Media

  if (!media || typeof media === 'string') {
    return null
  }

  const resourceType = media.mimeType?.includes('video') ? 'video' : 'image'
  const originalFilename = media.filename || ''

  const { mediaUrl, button } = field

  return (
    <article
      className={clsx(
        styles['m-project-list-item'],
        'group card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-center w-full',
      )}
    >
      <figure className="relative overflow-hidden bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <Link target="_blank" href={mediaUrl || '#'}>
          {resourceType === 'video' ? (
            <div className="overflow-hidden aspect-video">
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
            <div className="aspect-video relative overflow-hidden">
              <Image
                fill
                src={media.filename || ''}
                sizes={`(max-width: ${TABLET_WIDTH}px) 100vw, 100vw`}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                alt={originalFilename}
              />
            </div>
          )}
        </Link>
      </figure>

      <div className="p-6 flex flex-col justify-center">
        <div className="flex justify-center">
          <Link href={button.url} target="_blank" className="w-full max-w-xs">
            <Button aria-label={button.text} variant="primary" className="w-full">
              {button.text}
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectListItem
