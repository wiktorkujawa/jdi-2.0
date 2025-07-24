'use client'

import { MoonIcon } from '@/assets/svg'
import { SunIcon } from '@/assets/svg'
import { useDarkMode } from '@/hooks/useDarkMode'

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <button
      className="w-5 h-5 fixed right-4 top-20 cursor-pointer"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <SunIcon className="text-white-smoke" />
      ) : (
        <MoonIcon className="text-eerie-black" />
      )}
    </button>
  )
}
