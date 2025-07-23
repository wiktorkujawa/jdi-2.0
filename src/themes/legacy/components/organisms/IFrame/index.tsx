'use client';
import React from 'react';
import { BlockProps } from '@/utils/types';
import Button from '../../atoms/Button';
import FullscreenIcon from '@/assets/svg/fullscreen.svg';
import { useFrameControls } from '@/hooks/useFrameControls';

type IFrameProps = BlockProps<'IFrame'>;

const IFrame: React.FC<IFrameProps> = ({ 
  url, 
  blockName,
  frameControls,
  lockKeyboard
}) => {
  const { handleFullscreen, iframeRef } = useFrameControls({ lockKeyboard: lockKeyboard || false });

  return (
    <section id={blockName || undefined} className="c-iframe lg:my-16 my-10">
      <div className="o-container o-container--xl">
        <iframe
          ref={iframeRef}
          allowFullScreen
          loading="lazy"
          className="w-full dark:border-white border-2 border-double border-black aspect-[800/600] max-h-iframe-height"
          src={url || ''}
          title={blockName || ''}
        />
        {frameControls && (
          <div className="o-theme-window rounded-b-lg px-4 justify-end flex w-full relative">
            <Button
              onClick={handleFullscreen}
            >
              <FullscreenIcon className="w-5 h-5 inline-block align-middle" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default IFrame;