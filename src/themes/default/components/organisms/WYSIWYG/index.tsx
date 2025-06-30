import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

interface WYSIWYGProps {
  copy: SerializedEditorState;
  id?: string | null;
  blockName?: string | null;
  blockType: 'WYSIWYG';
}

const WYSIWYG: React.FC<WYSIWYGProps> = ({ copy }) => {
  return (
    <section className="c-wysiwyg-block my-8">
      <div className="o-container o-container--lg">
        <RichText data={copy} />
      </div>
    </section>
  );
};

export default WYSIWYG; 