import Image from 'next/image'
import Link from 'next/link'

import { Project } from '@/payload-types'

import { TABLET_WIDTH } from '@/utils/consts'

import Button from '../../atoms/Button'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const media = project.media
  if (!media || typeof media === 'string') {
    return null
  }

  const resourceType = media.mimeType?.includes('video') ? 'video' : 'image'
  const originalFilename = media.filename || ''

  return (
    <div className="card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <Link href={project.mediaUrl || '#'} target="_blank" className="block">
        {resourceType === 'video' ? (
          <div className="relative h-48 overflow-hidden bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
            <video
              poster={media.thumbnailURL || ''}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              autoPlay
              muted
              loop
              playsInline
              src={media.url || ''}
            />
          </div>
        ) : (
          <div className="relative h-48 overflow-hidden bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
            <Image
              src={media.filename || ''}
              alt={media.alt || project.name || originalFilename}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes={`(max-width: ${TABLET_WIDTH}px) 100vw, (max-width: 1200px) 50vw, 33vw`}
            />
          </div>
        )}
      </Link>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{project.name}</h3>

        {project.description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        )}

        {project.buttons && project.buttons.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.buttons.map((buttonItem, index) => (
              <Link
                key={buttonItem.id || index}
                href={buttonItem.button.url}
                target={buttonItem.button.target || '_self'}
                aria-label={buttonItem.button.ariaLabel || undefined}
                className="flex-1 min-w-[120px]"
              >
                <Button variant="primary" size="sm" className="w-full">
                  {buttonItem.button.text}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
