import { ProjectList } from '@/payload-types'

import { serverURL } from '@/utils/consts'

export const getProjectListData = async () => {
  try {
    const projectListRes = await fetch(`${serverURL}/read-api/project-list`, {
      cache: 'no-store',
      next: {
        tags: ['project-list'],
      },
    })
    const projectList: ProjectList = await projectListRes.json()
    return projectList
  } catch (error) {
    console.error('Error fetching project list:', error)
    return null
  }
}
