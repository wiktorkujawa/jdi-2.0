import React from 'react'

import { Page } from '@/payload-types'

import Banner from './features/Banner'
import Slider from './features/Slider'

type MastheadProps = Pick<Page, 'mastheadSlider' | 'feature' | 'title' | 'meta'>

const Masthead = ({ mastheadSlider, feature, title, meta }: MastheadProps) => {
  const renderContent = () => {
    switch (feature) {
      case 'banner':
        return <Banner title={title} meta={meta} />
      case 'slider':
        return mastheadSlider?.settings && mastheadSlider?.slides ? (
          <Slider lazy={false} {...mastheadSlider} />
        ) : null
      default:
        return null
    }
  }

  return <section className="c-masthead">{renderContent()}</section>
}

export default Masthead
