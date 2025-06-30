import React from 'react';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText } from '@payloadcms/richtext-lexical/react';

interface HeadingCopyProps {
  heading?: string | null;
  level?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5') | null;
  copy?: SerializedEditorState | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'HeadingCopy';
}

const HeadingCopy: React.FC<HeadingCopyProps> = ({ 
  heading, 
  level = 'h2', 
  copy 
}) => {
  const renderHeading = () => {
    if (!heading) return null;
    
    switch (level) {
      case 'h1':
        return <h1 className="heading-text">{heading}</h1>;
      case 'h2':
        return <h2 className="heading-text">{heading}</h2>;
      case 'h3':
        return <h3 className="heading-text">{heading}</h3>;
      case 'h4':
        return <h4 className="heading-text">{heading}</h4>;
      case 'h5':
        return <h5 className="heading-text">{heading}</h5>;
      default:
        return <h2 className="heading-text">{heading}</h2>;
    }
  };

  return (
    <section className="c-heading-copy-block my-8">
      <div className="o-container o-container--lg">
        {renderHeading()}
        {copy && (
          <div className="copy-content">
            <RichText data={copy} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeadingCopy; 