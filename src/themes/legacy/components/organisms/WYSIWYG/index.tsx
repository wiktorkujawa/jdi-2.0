import React from 'react';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText } from '@payloadcms/richtext-lexical/react';

interface WYSIWYGProps {
  copy: SerializedEditorState;
  id?: string | null;
  blockName?: string | null;
  blockType: 'WYSIWYG';
}

const WYSIWYG: React.FC<WYSIWYGProps> = ({ copy }) => {
  return (
    <section className="c-wysiwyg-block">
      <div className="o-container o-container--lg">
        <div className="wysiwyg-content">
          <RichText data={copy} />
        </div>
      </div>
    </section>
  );
};

export default WYSIWYG; 