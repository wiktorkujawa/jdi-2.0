import { PaginatedDocs } from 'payload'

import { Project } from '@/payload-types'

import { PROJECT_TYPES, serverURL } from '@/utils/consts'

export const getProjects = async (type?: (typeof PROJECT_TYPES)[number] | null) => {
  try {
    const projectListRes = await fetch(`${serverURL}/read-api/projects?type=${type}`, {
      cache: 'no-store',
      next: {
        tags: ['projects-block'],
      },
    })
    const projectList: PaginatedDocs<Project> = await projectListRes.json()
    return projectList.docs
  } catch (error) {
    console.error('Error fetching projects:', error)
    return null
  }
}

export const getProjectBySlug = async (slug: string) => {
  try {
    const projectRes = await fetch(`${serverURL}/read-api/projects/${slug}`, {
      cache: 'no-store',
    })
    const project: Project = await projectRes.json()
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}
