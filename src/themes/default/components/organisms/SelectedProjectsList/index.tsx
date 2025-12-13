import { Project } from '@/payload-types'

import { getProjects } from '@/lib/api/projects'
import { BlockProps } from '@/utils/types'

import ProjectCard from '../../molecules/ProjectCard'

type SelectedProjectsProps = BlockProps<'SelectedProjectsList'>

const getSelectedProjects = async ({
  selectFrom,
  type,
  projects,
}: Pick<SelectedProjectsProps, 'selectFrom' | 'type' | 'projects'>) => {
  if (selectFrom === 'type') {
    const projects = await getProjects(type)
    return projects
  }
  return projects as Project[]
}

const SelectedProjectsList = async ({
  blockName,
  selectFrom,
  type,
  projects,
  header,
}: SelectedProjectsProps) => {
  const selectedProjects = await getSelectedProjects({ selectFrom, type, projects })

  return (
    <section id={blockName || undefined} className="lg:my-20 my-12">
      <div className="o-container o-container--lg">
        {header && (
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {header}
          </h2>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selectedProjects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedProjectsList
