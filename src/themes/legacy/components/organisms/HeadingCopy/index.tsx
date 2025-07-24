import React from 'react'

import { RichText } from '@payloadcms/richtext-lexical/react'

import { BlockProps } from '@/utils/types'

import SVG from '../../atoms/SVG'
import Container from '../../templates/ContainerTemplate'

type HeadingCopyProps = BlockProps<'HeadingCopy'> & {
  arrowScroll?: string
}

const HeadingCopy: React.FC<HeadingCopyProps> = ({
  heading,
  level = 'h2',
  copy,
  blockName,
  arrowScroll,
}) => {
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
    <section id={blockName || undefined} className="c-heading-copy-block lg:my-16 my-10">
      <div className="o-container o-container--lg">
        <Container>
          {arrowScroll ? (
            <a
              role="button"
              aria-label="Scrol to projects"
              href={`#${arrowScroll}`}
              className="right-8 sm:right-16 top-24 sm:top-12 absolute"
            >
              <SVG
                className="dark:fill-white w-full scale-150 fill-black hover:fill-red-hover dark:hover:fill-red-hover"
                name={'arrow-down-circle-thin'}
              />
            </a>
          ) : null}
          <div className="text-center font-bold mb-10">{renderHeading()}</div>
          {copy && (
            <div className="o-rich-text">
              <RichText data={copy} />
            </div>
          )}
        </Container>
      </div>
    </section>
  )
}

export default HeadingCopy
