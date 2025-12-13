'use client'

import { HTMLAttributeAnchorTarget, useState } from 'react'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { RichText } from '@payloadcms/richtext-lexical/react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { Page } from '@/payload-types'

import useRWD from '@/hooks/useRWD'
import { TABLET_WIDTH } from '@/utils/consts'

import Button from '../../../../atoms/Button'

import styles from './Slider.module.css'

const Dots = dynamic(() => import('./partials/Dots'))

type SliderProps = NonNullable<Page['mastheadSlider']> & {
  lazy?: boolean
}

const Slider = ({ slides, settings, lazy = true }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const { isDesktop } = useRWD()
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: !!settings?.mobile?.loop,
      drag: !!settings?.mobile?.draggable,
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

  return (
    <div className={styles['navigation-wrapper']}>
      <div ref={sliderRef} className="keen-slider max-h-screen rounded-2xl overflow-hidden">
        {slides?.map(({ id, heading, copy, button, attribution, media }) => {
          if (!media || typeof media === 'string') {
            return null
          }

          const resourceType = media.mimeType?.includes('video') ? 'video' : 'image'
          const originalFilename = media.filename || ''

          return (
            <div key={id} className={'keen-slider__slide max-w-full min-w-full relative'}>
              <div className="absolute whitespace-normal flex flex-col justify-center z-50 top-0 pl-6 md:pl-12 pt-14 pb-12 left-0 h-full lg:w-1/2 w-11/12">
                {heading && (
                  <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold pb-4 text-white drop-shadow-lg">
                    {heading}
                  </h3>
                )}

                {!!copy && (
                  <div className="lg:line-clamp-none line-clamp-3 child:inline text-white drop-shadow-md prose prose-invert max-w-none mb-6">
                    <RichText data={copy} />
                  </div>
                )}
                {button && (
                  <Link
                    className="inline-block"
                    target={button.target as HTMLAttributeAnchorTarget}
                    href={button.url}
                  >
                    <Button variant="primary" size="lg">
                      {button.text}
                    </Button>
                  </Link>
                )}
              </div>

              {attribution && (
                <div
                  dangerouslySetInnerHTML={{ __html: attribution || '' }}
                  className="absolute max-w-36 md:max-w-none z-50 bottom-5 right-5 text-white text-sm drop-shadow-lg"
                />
              )}

              {resourceType === 'video' ? (
                <div className="overflow-hidden">
                  <video
                    src={media?.url || ''}
                    poster={media.thumbnailURL || ''}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="aspect-video w-full max-h-screen min-h-80 overflow-hidden object-cover mx-auto transition-transform"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50"></div>
                </div>
              ) : (
                <div className="aspect-video w-full max-h-screen overflow-hidden min-h-80 relative">
                  <Image
                    loading={lazy ? 'lazy' : 'eager'}
                    fill
                    src={media?.filename || ''}
                    sizes={`(max-width: ${TABLET_WIDTH}px) 100vw, 50vw`}
                    className="object-cover mx-auto transition-transform"
                    alt={originalFilename}
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50"></div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {loaded && instanceRef.current && slides && slides?.length > 1 && (
        <Dots
          isDesktop={!!settings?.desktop?.dots}
          isMobile={!!settings?.mobile?.dots}
          slides={slides}
          currentSlide={currentSlide}
          instanceRef={instanceRef}
        />
      )}
    </div>
  )
}

export default Slider
