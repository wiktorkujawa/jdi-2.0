import Image from 'next/image'

import { Project } from '@/payload-types'

import Link from '../../atoms/Link'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const renderMedia = () => {
    if (!project.media || typeof project.media === 'string') {
      return null
    }

    const resourceType = project.media.mimeType?.includes('video') ? 'video' : 'image'
    const originalFilename = project.media.filename || ''

    if (resourceType === 'video') {
      return (
        <div className="relative h-48 overflow-hidden">
          <video
            poster={project.media.thumbnailURL || ''}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={project.media.url || ''}
          />
        </div>
      )
    }

    return (
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.media.filename || ''}
          alt={project.media.alt || project.name || originalFilename}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    )
  }

  return (
    <div className="o-theme-window rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {renderMedia()}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {project.name}
        </h3>

        {project.description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>
        )}

        {project.buttons && project.buttons.length > 0 && (
          <div className="flex gap-2">
            {project.buttons.map((buttonItem, index) => (
              <Link
                key={buttonItem.id || index}
                href={buttonItem.button.url}
                target={buttonItem.button.target || '_self'}
                aria-label={buttonItem.button.ariaLabel || undefined}
              >
                {buttonItem.button.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
