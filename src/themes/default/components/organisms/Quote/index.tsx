import React from 'react'

import { BlockProps } from '@/utils/types'

type QuoteProps = BlockProps<'Quote'>

const Quote: React.FC<QuoteProps> = ({ author, quote, decoration = false, blockName }) => {
  return (
    <section id={blockName || undefined} className="c-quote-block lg:my-20 my-12">
      <div className="o-container o-container--md">
        <blockquote className="quote-block card bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-l-4 border-indigo-500 dark:border-indigo-400 p-8 rounded-xl shadow-lg">
          {decoration && (
            <div className="quote-decoration text-6xl text-indigo-600 dark:text-indigo-400 mb-4 opacity-20 font-serif">
              &ldquo;
            </div>
          )}
          <p className="quote-text text-xl md:text-2xl italic mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">
            {quote}
          </p>
          <footer className="quote-author text-base font-semibold text-indigo-600 dark:text-indigo-400">
            — {author}
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

export default Quote
