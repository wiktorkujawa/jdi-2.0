import { PaginatedDocs } from 'payload'

import { Project } from '@/payload-types'

import { PROJECT_TYPES, serverURL } from '@/utils/consts'

export const getProjects = async (type?: (typeof PROJECT_TYPES)[number] | null) => {
  const projectListRes = await fetch(`${serverURL}/read-api/projects?type=${type}`, {
    cache: 'force-cache',
    next: {
      tags: ['projects-block'],
    },
  })
  if (!projectListRes.ok) {
    return null
  }
  const projectList: PaginatedDocs<Project> = await projectListRes.json()
  return projectList.docs
}

export const getProjectBySlug = async (slug: string) => {
  const projectRes = await fetch(`${serverURL}/read-api/projects/${slug}`, {
    cache: 'force-cache',
  })
  if (!projectRes.ok) {
    return null
  }
  const project: Project = await projectRes.json()
  return project
}
