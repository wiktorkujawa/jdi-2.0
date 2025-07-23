import { Page } from '@/payload-types'

import { getHeaderData } from '@/lib/api/header'
import { CustomPage } from '@/utils/types'

import NavigationBar from '../../organisms/NavigationBar'

const Header = async () => {
  const { page, pages } = await getHeaderData()

  return (
    <header className="c-header w-full fixed top-0 z-50 dark:text-dark-font-primary text-theme-font-primary">
      <NavigationBar nav={[...(page as Page[]), ...(pages as CustomPage[])]} />
    </header>
  )
}
export default Header
