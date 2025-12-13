import React from 'react'

import { RichText } from '@payloadcms/richtext-lexical/react'

import { BlockProps } from '@/utils/types'

type WYSIWYGProps = BlockProps<'WYSIWYG'>

const WYSIWYG: React.FC<WYSIWYGProps> = ({ copy, blockName }) => {
  return (
    <section id={blockName || undefined} className="c-wysiwyg-block lg:my-20 my-12">
      <div className="o-container o-container--lg">
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:bg-linear-to-r prose-headings:from-indigo-600 prose-headings:via-purple-600 prose-headings:to-pink-600 prose-headings:bg-clip-text prose-headings:text-transparent prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-gray-100 o-rich-text">
          <RichText data={copy} />
        </div>
      </div>
    </section>
  )
}

export default WYSIWYG
