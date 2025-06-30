'use client'

import { useState, useEffect } from 'react'

type DarkModeHook = {
  isDarkMode: boolean
  toggleDarkMode: () => void
  setDarkMode: (dark: boolean) => void
}

export const useDarkMode = (): DarkModeHook => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // Initialize dark mode on mount
  useEffect(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem('darkMode')
    
    if (savedMode !== null) {
      // Use saved preference
      setIsDarkMode(savedMode === 'true')
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(systemPrefersDark)
    }
    
    setIsLoaded(true)
  }, [])

  // Apply dark mode to document
  useEffect(() => {
    if (!isLoaded) return

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode, isLoaded])

  // Save to localStorage
  useEffect(() => {
    if (!isLoaded) return
    
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode, isLoaded])

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  const setDarkMode = (dark: boolean) => {
    setIsDarkMode(dark)
  }

  return {
    isDarkMode,
    toggleDarkMode,
    setDarkMode
  }
} 