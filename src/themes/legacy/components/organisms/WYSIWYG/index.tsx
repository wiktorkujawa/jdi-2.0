import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { BlockProps } from '@/utils/types';

type WYSIWYGProps = BlockProps<'WYSIWYG'>;

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