import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { BlockProps } from '@/utils/types'
import Container from '../../templates/ContainerTemplate'
type WYSIWYGProps = BlockProps<'WYSIWYG'>

const WYSIWYG: React.FC<WYSIWYGProps> = ({ copy, blockName }) => {
  return (
    <section id={blockName || undefined} className="c-wysiwyg-block lg:my-16 my-10">
      <div className="o-container o-container--lg">
        <Container>
          <div className="o-rich-text">
            <RichText data={copy} />
          </div>
        </Container>
      </div>
    </section>
  )
}

export default WYSIWYG
