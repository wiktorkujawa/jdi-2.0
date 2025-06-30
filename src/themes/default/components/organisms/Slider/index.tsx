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
      <div className="slider-block my-8">
        <p className="text-gray-500 text-center">No slides to display</p>
      </div>
    );
  }

  return (
    <section className="c-slider-block my-8">
      <div className="slider-container relative">
        {/* For now, we'll render slides as a simple list */}
        {/* TODO: Implement proper slider functionality with settings */}
        <div className="slides-list space-y-4">
          {slides.map((slide, index) => (
            <div key={slide.id || index} className="slide-item border rounded-lg p-4">
              <div className="slide-media mb-4">
                {/* TODO: Implement proper media rendering */}
                <div className="bg-gray-200 h-48 rounded flex items-center justify-center">
                  <span className="text-gray-500">Media: {typeof slide.media === 'string' ? slide.media : 'Media Object'}</span>
                </div>
              </div>
              
              {slide.heading && (
                <h3 className="slide-heading text-xl font-bold mb-2">
                  {slide.heading}
                </h3>
              )}
              
              {slide.copy && (
                <div className="slide-copy mb-4">
                  <RichText data={slide.copy} />
                </div>
              )}
              
              {slide.attribution && (
                <p className="slide-attribution text-sm text-gray-600 mb-4">
                  {slide.attribution}
                </p>
              )}
              
              <a
                href={slide.button.url}
                target={slide.button.target || '_self'}
                aria-label={slide.button.ariaLabel || undefined}
                className="slide-button inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
              >
                {slide.button.text}
              </a>
            </div>
          ))}
        </div>
        
        {/* Settings display for debugging */}
        <div className="slider-settings mt-4 p-4 bg-gray-100 rounded text-sm">
          <h4 className="font-bold mb-2">Slider Settings:</h4>
          <div className="grid grid-cols-2 gap-4">
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
    </section>
  );
};

export default Slider; 