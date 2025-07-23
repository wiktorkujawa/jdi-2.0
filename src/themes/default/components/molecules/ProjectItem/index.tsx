import { Project, Media } from '@/payload-types'
import Link from 'next/link'
import Button from '@/themes/default/components/atoms/Button'
import styles from './ProjectItem.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import { TABLET_WIDTH } from '@/utils/consts'

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
        <Link target="_blank" href={mediaUrl || '#'}>
          <h3 className={clsx(styles['m-project-item--header'])}>Project </h3>
          <h4 title={name || ''} className="text-h3 font-bold mb-4 line-clamp-1">
            {name}
          </h4>

          {resourceType === 'video' ? (
            <div className="overflow-hidden">
              <video
                poster={media.thumbnailURL || ''}
                className="lazy aspect-2/1 object-contain mx-auto hover:scale-150 transition-transform"
                autoPlay
                muted
                loop
                playsInline
                src={media.url || ''}
              />
            </div>
          ) : (
            <div className="aspect-2/1 relative overflow-hidden">
              <Image
                fill
                src={media.filename || ''}
                sizes={`(max-width: ${TABLET_WIDTH}px) 100vw, 50vw`}
                className="aspect-2/1 object-contain mx-auto hover:scale-150 transition-transform"
                alt={originalFilename}
              />
            </div>
          )}
        </Link>
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
                href={button.url}
                target="_blank"
                className="w-full flex justify-center lg:w-auto"
              >
                <Button aria-label={button.text} className="w-full">
                  {button.text}
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default ProjectItem
