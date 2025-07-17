'use client';
import { useKeenSlider } from 'keen-slider/react';
import { HTMLAttributeAnchorTarget, useState } from 'react';
import "keen-slider/keen-slider.min.css";
import Image from 'next/image';
import styles from './Slider.module.css';
import Link from 'next/link';
import useRWD from '@/hooks/useRWD';
import dynamic from 'next/dynamic';
import { TABLET_WIDTH } from '@/utils/consts';
import clsx from 'clsx';
import { Page } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';

const Dots = dynamic(() => import('./partials/Dots'));
// TODO - in progress
// const Arrows = dynamic(() => import('./partials/Arrows'));

type SliderProps = Page['mastheadSlider'] & {
  lazy?: boolean;
}

const Slider = ({ slides, settings, lazy = true }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false);
  const { isDesktop } = useRWD();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
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
      }
    }
  },
    ((!!settings?.mobile?.autoplay && !isDesktop) || (!!settings?.desktop?.autoplay && isDesktop)) ? [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, isDesktop ? settings?.desktop?.autoplaySpeed || 0 : settings?.mobile?.autoplaySpeed || 0)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ] : [],
  );

  return (
    <>
      <div className={styles["navigation-wrapper"]}>
        <div ref={sliderRef} className="keen-slider max-h-screen">
          {
            slides?.map(({ id, heading, copy, button, attribution, media }) => {

              if (!media || typeof media === 'string') {
                return null;
              }
            
              const resourceType = media.mimeType?.includes('video') ? 'video' : 'image';
              const originalFilename = media.filename || '';
            

              
              return <div key={id} className={`keen-slider__slide`}>

                <div className='absolute whitespace-normal flex flex-col justify-center z-50 top-0 pl-6 pt-14 pb-12 left-0 h-full lg:w-1/2 w-11/12' >
                  <h3 className='lg:text-h2 md:text-h4 text-h5 font-bold pb-2'>{heading}</h3>

                  {!!copy && <div className='lg:line-clamp-none line-clamp-3 child:inline o-rich-text'><RichText data={copy} /></div>}
                  <Link className='py-2 px-4 o-theme-window w-fit mt-5 rounded-full' target={button.target as HTMLAttributeAnchorTarget} href={button.url}>{button.text}</Link>
                </div>

                <div dangerouslySetInnerHTML={{ __html: attribution || '' }} className='absolute max-w-36 md:max-w-none z-50 bottom-5 right-5' />


                {resourceType === "video" ? (
                    <video
                      poster="logowhite.svg"
                      className={clsx("aspect-2/1 w-full max-h-screen min-h-80 overflow-hidden opacity-50 object-cover mx-auto transition-transform", lazy && 'lazy')}
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={media?.url || ''}
                    />
                ) : (
                  <div className="aspect-2/1 w-full max-h-screen overflow-hidden min-h-80">
                    <Image
                      loading={lazy ? 'lazy' : 'eager'}
                      fill
                      src={media?.filename || ''}
                      sizes={`(max-width: ${TABLET_WIDTH}px) 100vw, 50vw`}
                      className="opacity-50 object-cover mx-auto transition-transform"
                      alt={originalFilename}
                    />
                  </div>
                )}
              </div>
})
          }
        </div>

        {
          loaded && instanceRef.current && (
            <>
              {isDesktop ? (
                <>
                  {settings?.desktop?.dots && <Dots slides={slides as any} currentSlide={currentSlide} instanceRef={instanceRef} />}
                  {/* TODO - in progress */}
                  {/* {desktop.arrows && <Arrows currentSlide={currentSlide} instanceRef={instanceRef} />} */}
                </>

              ) : (
                <>
                  {settings?.mobile?.dots && <Dots slides={slides as any} currentSlide={currentSlide} instanceRef={instanceRef} />}
                  {/* TODO - in progress */}
                  {/* {mobile.arrows && <Arrows currentSlide={currentSlide} instanceRef={instanceRef} />} */}
                </>
              )
              }

            </>
          )
        }
      </div>

    </>
  )
};

export default Slider;

