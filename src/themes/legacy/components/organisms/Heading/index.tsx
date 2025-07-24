import React from 'react'

import clsx from 'clsx'

import { BlockProps } from '@/utils/types'

import Container from '../../templates/ContainerTemplate'

type HeadingProps = BlockProps<'Heading'>

const Heading: React.FC<HeadingProps> = ({ heading, level = 'h2', blockName, align = 'left' }) => {
  const renderHeading = () => {
    if (!heading) return null

    switch (level) {
      case 'h1':
        return <h1 className="text-h1">{heading}</h1>
      case 'h2':
        return <h2 className="text-h2">{heading}</h2>
      case 'h3':
        return <h3 className="text-h3">{heading}</h3>
      case 'h4':
        return <h4 className="text-h4">{heading}</h4>
      case 'h5':
        return <h5 className="text-h5">{heading}</h5>
      default:
        return <h2 className="text-h2">{heading}</h2>
    }
  }

  return (
    <section id={blockName || undefined} className="c-heading-block lg:my-16 my-10">
      <div
        className={clsx(
          'o-container o-container--lg',
          align === 'center' && 'text-center',
          align === 'left' && 'text-left',
          align === 'right' && 'text-right',
        )}
      >
        <Container>{renderHeading()}</Container>
      </div>
    </section>
  )
}

export default Heading
