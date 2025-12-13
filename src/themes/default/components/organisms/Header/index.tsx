import { Page } from '@/payload-types'

import { getHeaderData } from '@/lib/api/header'
import { CustomPage } from '@/utils/types'

import NavigationBar from '../../organisms/NavigationBar'

export const Header = async () => {
  const data = await getHeaderData()

  if (!data) {
    return null
  }

  const { page, pages } = data

  return (
    <header className="c-header sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
      <NavigationBar nav={[...(page as Page[]), ...(pages as CustomPage[])]} />
    </header>
  )
}
