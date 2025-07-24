import React from 'react'
import { MutableRefObject } from 'react'

import clsx from 'clsx'
import { KeenSliderInstance } from 'keen-slider/react'

import { BlockProps } from '@/utils/types'

import styles from './Dots.module.css'

type SlidesProps = BlockProps<'Slider'>['slides']

const Dots = ({
  slides,
  currentSlide,
  instanceRef,
  isDesktop,
  isMobile,
}: {
  slides: SlidesProps
  currentSlide: number
  instanceRef: MutableRefObject<KeenSliderInstance | null>
  isDesktop: boolean
  isMobile: boolean
}) => {
  return (
    <div
      className={clsx(
        styles.dots,
        isMobile ? 'block' : 'hidden',
        isDesktop ? 'lg:block' : 'lg:hidden',
      )}
    >
      {slides?.map((_, idx) => {
        return (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx)
            }}
            className={clsx(styles.dot, currentSlide === idx && styles.active)}
          ></button>
        )
      })}
    </div>
  )
}
export default Dots
