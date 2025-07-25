'use client'

import { RefObject, useCallback, useEffect, useRef } from 'react'

import { useIsVisible } from '@/hooks/useIsVisible'

type VideoComponentProps = {
  src: string
  poster?: string
  alt?: string
  muted?: boolean
  className?: string
  type?: string
}

const LazyVideo = ({
  src,
  poster,
  alt,
  type,
  muted = true,
  className,
  ...rest
}: VideoComponentProps) => {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    },
    false,
  )

  const videoRef = useRef<HTMLVideoElement>(null)

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      await videoRef.current?.play()
    } catch (_e) {
      // do nothing
    }
  }, [])

  const stopVideoOnMove = useCallback(() => {
    try {
      videoRef.current?.pause()
    } catch (_e) {
      // do nothing
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove()
    } else {
      stopVideoOnMove()
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove])

  return (
    <span ref={targetRef as RefObject<HTMLSpanElement>} className="relative min-h-12 h-full">
      <video
        ref={videoRef}
        loop
        autoPlay={false}
        preload="none"
        playsInline
        muted={muted}
        poster={poster}
        aria-label={alt}
        className={className}
        {...rest}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag. Please try viewing this page in a modern
        browser.
      </video>
    </span>
  )
}

export default LazyVideo
