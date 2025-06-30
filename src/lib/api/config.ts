import { serverURL } from "@/utils/consts"

export const getConfig = async () => {
    try {
  
      const req = await fetch(`${serverURL}/read-api/config`, {
        cache: 'force-cache',
        next: { tags: ['config'] },
      })
      return req.json()
    } catch (error) {
      console.error('Error fetching config:', error)
      return null
    }
  }