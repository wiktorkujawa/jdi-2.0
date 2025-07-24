import React from 'react';
import { BlockProps } from '@/utils/types';
import Container from '../../templates/ContainerTemplate';

type QuoteProps = BlockProps<'Quote'>;

const Quote: React.FC<QuoteProps> = ({ author, quote, decoration = false, blockName }) => {
  return (
    <section id={blockName || undefined} className="c-quote-block lg:my-16 my-10">
      <div className="o-container o-container--md">
        <Container>
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
        </Container>
      </div>
    </section>
  );
};

export default Quote; 