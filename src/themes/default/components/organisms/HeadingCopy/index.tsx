import React from 'react'

import { RichText } from '@payloadcms/richtext-lexical/react'
import clsx from 'clsx'

import { BlockProps } from '@/utils/types'

type HeadingCopyProps = BlockProps<'HeadingCopy'> & {
  arrowScroll?: string
}

const HeadingCopy: React.FC<HeadingCopyProps> = ({
  heading,
  level = 'h2',
  copy,
  blockName,
  align = 'left',
}) => {
  const renderHeading = () => {
    if (!heading) return null

    switch (level) {
      case 'h1':
        return (
          <h1 className="heading-text text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {heading}
          </h1>
        )
      case 'h2':
        return (
          <h2 className="heading-text text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {heading}
          </h2>
        )
      case 'h3':
        return (
          <h3 className="heading-text text-3xl md:text-4xl font-bold mb-5 text-gray-900 dark:text-gray-100">
            {heading}
          </h3>
        )
      case 'h4':
        return (
          <h4 className="heading-text text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {heading}
          </h4>
        )
      case 'h5':
        return (
          <h5 className="heading-text text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {heading}
          </h5>
        )
      default:
        return (
          <h2 className="heading-text text-4xl md:text-5xl font-bold mb-6 bg-liner-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {heading}
          </h2>
        )
    }
  }

  return (
    <section id={blockName || undefined} className="c-heading-copy-block lg:my-20 my-12">
      <div className="o-container o-container--lg">
        <div
          className={clsx(
            align === 'center' && 'text-center',
            align === 'left' && 'text-left',
            align === 'right' && 'text-right',
          )}
        >
          {renderHeading()}
        </div>
        {copy && (
          <div className="o-rich-text mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <RichText data={copy} />
          </div>
        )}
      </div>
    </section>
  )
}

export default HeadingCopy
