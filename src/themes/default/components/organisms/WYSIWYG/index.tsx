import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react'
import { BlockProps } from '@/utils/types';

type WYSIWYGProps = BlockProps<'WYSIWYG'>;

const WYSIWYG: React.FC<WYSIWYGProps> = ({ copy, blockName }) => {
  return (
    <section id={blockName || undefined} className="c-wysiwyg-block my-8">
      <div className="o-container o-container--lg">
        <RichText data={copy} />
      </div>
    </section>
  );
};

export default WYSIWYG; 