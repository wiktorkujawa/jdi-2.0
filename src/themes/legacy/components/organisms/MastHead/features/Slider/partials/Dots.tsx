import clsx from "clsx"
import styles from '../Slider.module.css';
import { Page } from "@/payload-types";
import { KeenSliderInstance } from "keen-slider/react";
import { MutableRefObject } from "react";

type SlidesProps = NonNullable<Page['mastheadSlider']>['slides'];

const Dots = ({
  slides,
  currentSlide,
  instanceRef,
  isDesktop,
  isMobile
}: {
  slides: SlidesProps
  currentSlide: number
  instanceRef: MutableRefObject<KeenSliderInstance | null>
  isDesktop: boolean
  isMobile: boolean
}) => {
  return <div className={clsx(styles.dots, isMobile ? 'block' : 'hidden', isDesktop ? 'lg:block' : 'lg:hidden')}>
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
}
export default Dots;
