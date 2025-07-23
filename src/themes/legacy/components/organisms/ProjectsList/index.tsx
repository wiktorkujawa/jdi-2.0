import React from 'react'
import { Project } from '@/payload-types'
import { BlockProps } from '@/utils/types'
import { getProjectListData } from '@/lib/api/projectList'
import styles from './ProjectsList.module.css'

import ProjectItem from '@/themes/legacy/components/molecules/ProjectItem'
import ProjectListItem from '@/themes/legacy/components/molecules/ProjectListItem'

type ProjectsListProps = BlockProps<'ProjectsList'>

const ProjectsList = async ({ blockName }: ProjectsListProps) => {
  const projectList = await getProjectListData()

  if (!projectList) {
    return null
  }

  const { projectsList, ...main } = projectList

  const isMain = Object.keys(main).length !== 0

  return (
    <section id={blockName || undefined} className="c-project-list lg:my-16 my-10">
      <div className="o-container o-container--lg">
        {isMain && <ProjectListItem {...main} />}

        <div className={styles['c-project-list--list-counter']}>
          {projectsList?.map((field) => (
            <ProjectItem key={(field as Project).id} {...(field as Project)} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsList
