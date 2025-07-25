'use client'

import React, { useState } from 'react'
import { HTMLAttributeAnchorTarget } from 'react'

import Image from 'next/image'

import { RichText } from '@payloadcms/richtext-lexical/react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import useRWD from '@/hooks/useRWD'
import { TABLET_WIDTH } from '@/utils/consts'
import { BlockProps } from '@/utils/types'

import LazyVideo from '../../atoms/LazyVideo'
import Link from '../../atoms/Link'
import Dots from '../../molecules/Dots'

type SliderProps = BlockProps<'Slider'>

const Slider: React.FC<SliderProps> = ({ slides = [], settings, blockName }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const { isDesktop } = useRWD()

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: !!settings?.mobile?.loop,
      drag: !!settings?.mobile?.draggable,
      slides: {
        perView: settings?.mobile?.slidesPerRow || 1,
        spacing: 16,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      breakpoints: {
        [`(min-width: ${TABLET_WIDTH}px)`]: {
          loop: !!settings?.desktop?.loop,
          drag: !!settings?.desktop?.draggable,
          slides: {
            perView: settings?.desktop?.slidesPerRow || 1,
            spacing: 16,
          },
        },
      },
    },
    (!!settings?.mobile?.autoplay && !isDesktop) || (!!settings?.desktop?.autoplay && isDesktop)
      ? [
          (slider) => {
            let timeout: ReturnType<typeof setTimeout>
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(
                () => {
                  slider.next()
                },
                isDesktop
                  ? settings?.desktop?.autoplaySpeed || 0
                  : settings?.mobile?.autoplaySpeed || 0,
              )
            }
            slider.on('created', () => {
              slider.container.addEventListener('mouseover', () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener('mouseout', () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on('dragStarted', clearNextTimeout)
            slider.on('animationEnded', nextTimeout)
            slider.on('updated', nextTimeout)
          },
        ]
      : [],
  )

  if (!slides || slides.length === 0) {
    return (
      <section id={blockName || undefined} className="slider-block">
        <div className="container">
          <p>No slides to display</p>
        </div>
      </section>
    )
  }

  return (
    <section id={blockName || undefined} className="c-slider lg:my-16 my-10">
      <div className="relative o-container">
        <div ref={sliderRef} className="keen-slider">
          {slides?.map(({ id, heading, copy, button, attribution, media }) => {
            if (!media || typeof media === 'string') {
              return null
            }

            const resourceType = media.mimeType?.includes('video') ? 'video' : 'image'
            const originalFilename = media.filename || ''

            return (
              <div key={id} className="keen-slider__slide">
                <div className="o-theme-window rounded-lg shadow-md p-6 h-full flex flex-col">
                  <div className="flex-shrink-0 mb-4">
                    {resourceType === 'video' ? (
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <LazyVideo
                          src={media?.url || ''}
                          type={media.mimeType || 'video/mp4'}
                          poster={media.thumbnailURL || ''}
                          alt={media.alt || ''}
                          className="w-full h-full object-cover"
                          muted
                        />
                      </div>
                    ) : (
                      <div className="aspect-video rounded-lg overflow-hidden relative">
                        <Image
                          fill
                          src={media?.filename || ''}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          alt={originalFilename}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-grow flex flex-col">
                    {heading && <h3 className="text-lg font-bold mb-2">{heading}</h3>}

                    {copy && (
                      <div className="text-sm mb-4 flex-grow">
                        <RichText data={copy} />
                      </div>
                    )}

                    {button && (
                      <div className="flex gap-2 mt-auto">
                        <Link
                          className="mx-auto"
                          target={button.target as HTMLAttributeAnchorTarget}
                          href={button.url}
                        >
                          {button.text}
                        </Link>
                      </div>
                    )}
                  </div>

                  {attribution && (
                    <div
                      dangerouslySetInnerHTML={{ __html: attribution }}
                      className="text-xs text-gray-500 mt-2 text-center"
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {loaded && instanceRef.current && slides?.length > 1 && (
          <Dots
            isDesktop={!!settings?.desktop?.dots}
            isMobile={!!settings?.mobile?.dots}
            slides={slides}
            currentSlide={currentSlide}
            instanceRef={instanceRef}
          />
        )}
      </div>
    </section>
  )
}

export default Slider
