import React from 'react';
import { BlockProps } from '@/utils/types';

type QuoteProps = BlockProps<'Quote'>;

const Quote: React.FC<QuoteProps> = ({ author, quote, decoration = false, blockName }) => {
  return (
    <section id={blockName || undefined} className="c-quote-block my-8">
        <div className="o-container o-container--md">
        <blockquote className="quote-block my-8 p-6 border-l-4 border-primary bg-gray-50">
        {decoration && (
            <div className="quote-decoration text-4xl text-primary mb-2">
            "
            </div>
        )}
        <p className="quote-text text-lg italic mb-4">
            {quote}
        </p>
        <footer className="quote-author text-sm font-semibold text-gray-600">
            — {author}
            </footer>
            </blockquote>
        </div>
    </section>
  );
};

export default Quote; 