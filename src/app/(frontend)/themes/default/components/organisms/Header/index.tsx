import { serverURL } from '@/utils/consts';
import { NavigationBar } from '../NavigationBar'
import { SocialMedia } from '../../molecules/SocialMedia'
import { Navigation as NavigationType } from '@/payload-types';

const getHeaderData = async () => {
  const headerRes = await fetch(`${serverURL}/read-api/navigation`, {
      cache: 'force-cache'
  });
  const header: NavigationType = await headerRes.json();
  return header;
}

export const Header = async () => {

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