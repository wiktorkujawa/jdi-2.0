'use client'

import React from 'react'

import FullscreenIcon from '@/assets/svg/fullscreen.svg'
import { useFrameControls } from '@/hooks/useFrameControls'
import { BlockProps } from '@/utils/types'

import Button from '../../atoms/Button'

type IFrameProps = BlockProps<'IFrame'>

const IFrame: React.FC<IFrameProps> = ({ url, blockName, frameControls, lockKeyboard }) => {
  const { handleFullscreen, iframeRef } = useFrameControls({ lockKeyboard: lockKeyboard || false })

  return (
    <section id={blockName || undefined} className="c-iframe lg:my-20 my-12">
      <div className="o-container o-container--xl">
        <div className="card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <iframe
            ref={iframeRef}
            allowFullScreen
            loading="lazy"
            className="w-full border-0 aspect-video bg-gray-100 dark:bg-gray-900"
            src={url || ''}
            title={blockName || ''}
          />
          {frameControls && (
            <div className="flex justify-end items-center px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <Button onClick={handleFullscreen} variant="outline" size="sm">
                <FullscreenIcon className="w-4 h-4 inline-block align-middle mr-2" />
                Fullscreen
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default IFrame

