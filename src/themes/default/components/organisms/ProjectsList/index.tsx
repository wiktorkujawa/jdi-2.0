import React from 'react'
import { Project, ProjectList } from '@/payload-types'

import { getProjectListData } from '@/lib/api/projectList'
import styles from './ProjectsList.module.css'

import ProjectItem from '@/themes/default/components/molecules/ProjectItem'
import ProjectListItem from '@/themes/default/components/molecules/ProjectListItem'


interface ProjectsListBlockProps {
  blockName?: string | null;
  blockType: 'ProjectsList';
}

const ProjectsList = async ({ blockName }: ProjectsListBlockProps) => {

  const projectList = await getProjectListData();

  if (!projectList) {
    return null;
  }

  const { projectsList, ...main } = projectList;

  const isMain = Object.keys(main).length !== 0;

  return (
    <section
      id={blockName || undefined}
      className="c-project-list my-16"
    >
      <div className="o-container o-container--lg">
      {isMain && <ProjectListItem {...main} />}

      <div id="list" className={styles["c-project-list--list-counter"]}>
        {projectsList?.map((field) => (
          <ProjectItem key={(field as Project).id} {...field as Project} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default ProjectsList