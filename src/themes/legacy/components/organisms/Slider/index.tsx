import React from 'react';
import { Media } from '@/payload-types';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText } from '@payloadcms/richtext-lexical/react';

interface Slide {
  media: string | Media;
  heading?: string | null;
  copy?: SerializedEditorState | null;
  attribution?: string | null;
  button: {
    text: string;
    url: string;
    target?: ('_self' | '_blank' | '_parent' | '_top') | null;
    ariaLabel?: string | null;
  };
  id?: string | null;
}

interface SliderSettings {
  dots?: boolean | null;
  loop?: boolean | null;
  arrows?: boolean | null;
  draggable?: boolean | null;
  autoplay?: boolean | null;
  autoplaySpeed?: number | null;
  slidesPerRow?: number | null;
}

interface SliderProps {
  slides?: Slide[] | null;
  desktop?: SliderSettings;
  mobile?: SliderSettings;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Slider';
}

const Slider: React.FC<SliderProps> = ({ 
  slides = [], 
  desktop = {}, 
  mobile = {} 
}) => {
  if (!slides || slides.length === 0) {
    return (
      <section className="slider-block">
        <div className="container">
          <p>No slides to display</p>
        </div>
      </section>
    );
  }

  return (
    <section className="slider-block">
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