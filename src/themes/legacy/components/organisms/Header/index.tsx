import { Page } from '@/payload-types'

import { getHeaderData } from '@/lib/api/header'
import { CustomPage } from '@/utils/types'

import NavigationBar from '../../organisms/NavigationBar'

const Header = async () => {
  const data = await getHeaderData()

  if (!data) {
    return null
  }

  const { page, pages } = data

  return (
    <header className="c-header w-full fixed top-0 z-50 dark:text-dark-font-primary text-theme-font-primary">
      <NavigationBar nav={[...(page as Page[]), ...(pages as CustomPage[])]} />
    </header>
  )
}
export default Header
