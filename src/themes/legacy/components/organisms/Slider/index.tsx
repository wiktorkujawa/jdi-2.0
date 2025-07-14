import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { BlockProps } from '@/utils/types';

type SliderProps = BlockProps<'Slider'>;

const Slider: React.FC<SliderProps> = ({ 
  slides = [], 
  desktop = {}, 
  mobile = {},
  blockName
}) => {
  if (!slides || slides.length === 0) {
    return (
      <section id={blockName || undefined} className="slider-block">
        <div className="container">
          <p>No slides to display</p>
        </div>
      </section>
    );
  }

  return (
    <section id={blockName || undefined} className="slider-block">
      <div className="container">
        <div className="slider-container">
          {/* For now, we'll render slides as a simple list */}
          {/* TODO: Implement proper slider functionality with settings */}
          <div className="slides-list">
            {slides.map((slide, index) => (
              <article key={slide.id || index} className="slide-item">
                <div className="slide-media">
                  {/* TODO: Implement proper media rendering */}
                  <div className="media-placeholder">
                    <span>Media: {typeof slide.media === 'string' ? slide.media : 'Media Object'}</span>
                  </div>
                </div>
                
                {slide.heading && (
                  <h3 className="slide-heading">
                    {slide.heading}
                  </h3>
                )}
                
                {slide.copy && (
                  <div className="slide-copy">
                    <RichText data={slide.copy} />
                  </div>
                )}
                
                {slide.attribution && (
                  <p className="slide-attribution">
                    {slide.attribution}
                  </p>
                )}
                
                <a
                  href={slide.button.url}
                  target={slide.button.target || '_self'}
                  aria-label={slide.button.ariaLabel || undefined}
                  className="slide-button"
                >
                  {slide.button.text}
                </a>
              </article>
            ))}
          </div>
          
          {/* Settings display for debugging */}
          <div className="slider-settings">
            <h4>Slider Settings:</h4>
            <div className="settings-grid">
              <div>
                <strong>Desktop:</strong>
                <pre>{JSON.stringify(desktop, null, 2)}</pre>
              </div>
              <div>
                <strong>Mobile:</strong>
                <pre>{JSON.stringify(mobile, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider; 