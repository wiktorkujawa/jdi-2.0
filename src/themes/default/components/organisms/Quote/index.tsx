import React from 'react';

interface QuoteProps {
  author: string;
  quote: string;
  decoration?: boolean | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Quote';
}

const Quote: React.FC<QuoteProps> = ({ author, quote, decoration = false }) => {
  return (
    <section className="c-quote-block my-8">
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