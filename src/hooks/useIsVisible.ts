import { useEffect, useRef, useState } from 'react'

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export const useIsVisible = (options?: IntersectionObserverOptions, once = false) => {
  const optionsRef = useRef(options)
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef<Element | null>(null)

  useEffect(() => {
    const currentTarget = targetRef.current

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(() => true)
          if (once) {
            observer.unobserve(entry.target)
            observer.disconnect()
          }
        } else {
          setIsVisible(() => false)
        }
      })
    }, optionsRef.current)

    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
      observer.disconnect()
    }
  }, [once])

  return { isVisible, targetRef }
}
