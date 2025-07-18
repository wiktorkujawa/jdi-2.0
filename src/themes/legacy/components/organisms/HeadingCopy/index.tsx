import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { BlockProps } from '@/utils/types';
import Container from '../../templates/ContainerTemplate';
type HeadingCopyProps = BlockProps<'HeadingCopy'>;


const HeadingCopy: React.FC<HeadingCopyProps> = ({ 
  heading, 
  level = 'h2', 
  copy,
  blockName
}) => {
  const renderHeading = () => {
    if (!heading) return null;
    
    switch (level) {
      case 'h1':
        return <h1 className="text-h1">{heading}</h1>;
      case 'h2':
        return <h2 className="text-h2">{heading}</h2>;
      case 'h3':
        return <h3 className="text-h3">{heading}</h3>;
      case 'h4':
        return <h4 className="text-h4">{heading}</h4>;
      case 'h5':
        return <h5 className="text-h5">{heading}</h5>;
      default:
        return <h2 className="text-h2">{heading}</h2>;
    }
  };

  return (
    <section id={blockName || undefined} className="c-heading-copy-block my-8">
      <div className="o-container o-container--lg">
        <Container>
          {renderHeading()}
          {copy && (
            <div className="o-rich-text">
              <RichText data={copy} />
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default HeadingCopy; 