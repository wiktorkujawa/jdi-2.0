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