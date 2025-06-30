'use client'

import { useDarkMode } from '@/hooks/useDarkMode'
import { DarkModeToggle } from '@/themes/default/components/molecules/DarkMode/DarkModeToggle'

export const DarkModeDemo = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen p-8 transition-colors duration-300 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Dark Mode Demo
          </h1>
          <DarkModeToggle size="lg" />
        </div>

        {/* Info Card */}
        <div className="p-6 rounded-lg border bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Current Mode: {isDarkMode ? 'Dark' : 'Light'}
          </h2>
          <p className="text-lg text-gray-900 dark:text-gray-100 opacity-80">
            This demo shows how the dark mode system works using Tailwind's dark mode directive.
          </p>
        </div>

        {/* Color Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-4 rounded-lg border bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Background</h3>
            <div className="h-16 rounded bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700"></div>
          </div>
          
          <div className="p-4 rounded-lg border bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Surface</h3>
            <div className="h-16 rounded bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700"></div>
          </div>
          
          <div className="p-4 rounded-lg border bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Border</h3>
            <div className="h-16 rounded bg-transparent border-4 border-gray-200 dark:border-gray-700"></div>
          </div>
        </div>

        {/* Text Examples */}
        <div className="p-6 rounded-lg border bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Typography Examples</h2>
          
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Heading 1</h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Heading 2</h2>
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">Heading 3</h3>
            <p className="text-base text-gray-900 dark:text-gray-100 opacity-80">
              This is a paragraph with secondary text color. It demonstrates how text adapts to the current theme mode.
            </p>
            <p className="text-sm text-gray-900 dark:text-gray-100 opacity-60">
              This is smaller text with even lower opacity for subtle information.
            </p>
          </div>
        </div>

        {/* Code Block */}
        <div className="mt-8 p-6 rounded-lg border bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Code Example</h3>
          <pre className="p-4 rounded bg-gray-900 text-green-400 overflow-x-auto">
{`// Dark mode hook usage
const { isDarkMode, toggleDarkMode } = useDarkMode()

// Tailwind dark mode classes
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-gray-900 dark:text-gray-100">
    Hello World
  </h1>
</div>`}
          </pre>
        </div>
      </div>
    </div>
  )
} 