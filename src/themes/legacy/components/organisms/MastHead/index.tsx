import { Page } from '@/payload-types';
import React from 'react'
import Slider from './features/Slider';

type SliderProps = Pick<Page, 'mastheadSlider' | 'feature'>

const Masthead = ({ mastheadSlider, feature }: SliderProps) => {
  return (
    <section className="c-masthead">
      {mastheadSlider?.settings && mastheadSlider?.slides && <Slider lazy={false} {...mastheadSlider} />}
    </section>
  )
}

export default Masthead;