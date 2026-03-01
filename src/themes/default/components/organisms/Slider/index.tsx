import React from 'react'

import { RichText } from '@payloadcms/richtext-lexical/react'

import { BlockProps } from '@/utils/types'

type SliderProps = BlockProps<'Slider'>

const Slider: React.FC<SliderProps> = ({ blockName, slides = [] }) => {
  if (!slides || slides.length === 0) {
    return (
      <div id={blockName || undefined} className="c-slider-block lg:my-16 my-10">
        <p className="text-gray-500 text-center">No slides to display</p>
      </div>
    )
  }

  return (
    <section id={blockName || undefined} className="c-slider-block lg:my-20 my-12">
      <div className="slider-container relative o-container o-container--lg">
        {/* For now, we'll render slides as a simple list */}
        {/* TODO: Implement proper slider functionality with settings */}
        <div className="slides-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((slide, index) => (
            <div
              key={slide.id || index}
              className="slide-item card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="slide-media mb-4 bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 h-48 rounded-t-xl flex items-center justify-center">
                {/* TODO: Implement proper media rendering */}
                <span className="text-gray-500 dark:text-gray-400">
                  Media: {typeof slide.media === 'string' ? slide.media : 'Media Object'}
                </span>
              </div>

              <div className="p-6">
                {slide.heading && (
                  <h3 className="slide-heading text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                    {slide.heading}
                  </h3>
                )}

                {slide.copy && (
                  <div className="slide-copy mb-4 prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <RichText data={slide.copy} />
                  </div>
                )}

                {slide.attribution && (
                  <p className="slide-attribution text-sm text-indigo-600 dark:text-indigo-400 mb-4 font-medium">
                    {slide.attribution}
                  </p>
                )}

                {slide.button && (
                  <a
                    href={slide.button.url}
                    target={slide.button.target || '_self'}
                    aria-label={slide.button.ariaLabel || undefined}
                    className="slide-button inline-block bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                  >
                    {slide.button.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
