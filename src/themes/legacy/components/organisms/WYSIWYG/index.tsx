import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { Page } from '@/payload-types';

type CustomComponents = NonNullable<Page['customComponents']>;
type WYSIWYGProps = Extract<CustomComponents[number], { blockType: 'WYSIWYG' }>;

const WYSIWYG: React.FC<WYSIWYGProps> = ({ copy, blockName }) => {
  return (
    <section id={blockName || undefined} className="c-wysiwyg-block">
      <div className="o-container o-container--lg">
        <div className="o-rich-text">
          <RichText data={copy} />
        </div>
      </div>
    </section>
  );
};

export default WYSIWYG; 