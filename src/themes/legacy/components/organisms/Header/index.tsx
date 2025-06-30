import { NavigationBar } from '@/themes/legacy/components/organisms/NavigationBar'
import { SocialMedia } from '@/themes/legacy/components/molecules/SocialMedia'
import { getHeaderData } from '@/lib/api/header';


const Header = async () => {

  const data = await getHeaderData();

  return (
    <header>
      <NavigationBar />
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Welcome to our platform
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </header>
  )
} 
export default Header;