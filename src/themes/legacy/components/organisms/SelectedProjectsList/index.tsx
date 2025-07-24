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
    <section id={blockName || undefined} className="lg:my-16 my-10">
      <div className="o-container o-container--lg">
        {header && <h2 className="text-h2 font-bold mb-4">{header}</h2>}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {selectedProjects?.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}
export default SelectedProjectsList
