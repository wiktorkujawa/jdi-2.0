import { ProjectList } from '@/payload-types'
import { serverURL } from '@/utils/consts'

export const getProjectListData = async () => {
  const projectListRes = await fetch(`${serverURL}/read-api/project-list`, {
    cache: 'force-cache',
    next: {
      tags: ['project-list'],
    },
  })
  if (!projectListRes.ok) {
    return null
  }
  const projectList: ProjectList = await projectListRes.json()
  return projectList
}
