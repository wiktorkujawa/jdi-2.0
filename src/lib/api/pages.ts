import { PaginatedDocs } from 'payload'

import { Page } from '@/payload-types'

import { serverURL } from '@/utils/consts'

export const getPageData = async (slug: string = 'home') => {
  try {
    const pageRes = await fetch(`${serverURL}/read-api/pages/${slug}`, {
      cache: 'no-store',
    })
    const page: Page = await pageRes.json()

    return page
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export const getPagesData = async () => {
  try {
    const pageRes = await fetch(`${serverURL}/read-api/pages`)
    const pages: PaginatedDocs<Page> = await pageRes.json()
    return pages
  } catch (error) {
    console.error('Error fetching pages:', error)
    return null
  }
}
