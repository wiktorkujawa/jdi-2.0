import React from 'react';
import { BlockProps } from '@/utils/types';

type QuoteProps = BlockProps<'Quote'>;

const Quote: React.FC<QuoteProps> = ({ author, quote, decoration = false, blockName }) => {
  return (
    <section id={blockName || undefined} className="c-quote-block my-8">
      <div className="o-container o-container--md">
        <blockquote className="quote-content">
          {decoration && (
            <div className="quote-decoration">
              "
            </div>
          )}
          <p className="quote-text">
            {quote}
          </p>
          <footer className="quote-author">
            — {author}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote; 