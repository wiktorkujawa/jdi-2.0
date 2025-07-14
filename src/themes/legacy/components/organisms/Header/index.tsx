import NavigationBar from '@/themes/legacy/components/organisms/NavigationBar'
import { getHeaderData } from '@/lib/api/header';
import { Page } from '@/payload-types';
import { CustomPage } from '@/utils/types';

const Header = async () => {

  const { page, pages } = await getHeaderData();

  return (
    <header className="c-header sticky top-0 z-50 dark:text-dark-font-primary text-theme-font-primary">
      <NavigationBar nav={[...page as Page[], ...pages as CustomPage[]]} />
    </header>
  )
} 
export default Header;