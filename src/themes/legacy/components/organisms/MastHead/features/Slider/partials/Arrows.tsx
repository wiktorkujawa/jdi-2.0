import { MutableRefObject } from 'react'
import { MouseEvent } from 'react'

import { KeenSliderInstance } from 'keen-slider/react'

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: MouseEvent<SVGSVGElement>) => void
}) {
  const disabled = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  )
}

const Arrows = ({
  currentSlide,
  instanceRef,
}: {
  currentSlide: number
  instanceRef: MutableRefObject<KeenSliderInstance | null>
}) => {
  return (
    <>
      <Arrow
        left
        onClick={(e: MouseEvent<SVGSVGElement>) => {
          e.stopPropagation()
          instanceRef.current?.prev()
        }}
        disabled={currentSlide === 0}
      />

      <Arrow
        onClick={(e: MouseEvent<SVGSVGElement>) => {
          e.stopPropagation()
          instanceRef.current?.next()
        }}
        disabled={currentSlide === (instanceRef.current?.track.details.slides.length || 0) - 1}
      />
    </>
  )
}
export default Arrows
