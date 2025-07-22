import { useRef } from 'react';

// Type definition for navigator.keyboard
interface KeyboardAPI {
  lock(): Promise<void>;
  unlock(): Promise<void>;
}

interface NavigatorWithKeyboard extends Navigator {
  keyboard?: KeyboardAPI;
}

export const useFrameControls = ({ lockKeyboard = false }: { lockKeyboard?: boolean }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullscreen = async () => {
    const iframe = iframeRef.current;
    if (iframe) {
      try {
        // Request fullscreen
        if (iframe.requestFullscreen) {
          await iframe.requestFullscreen();
        } else if ((iframe as any).mozRequestFullScreen) {
          await (iframe as any).mozRequestFullScreen();
        } else if ((iframe as any).webkitRequestFullscreen) {
          await (iframe as any).webkitRequestFullscreen();
        } else if ((iframe as any).msRequestFullscreen) {
          await (iframe as any).msRequestFullscreen();
        }

        if (lockKeyboard) {
          const nav = navigator as NavigatorWithKeyboard;
          if (nav.keyboard && nav.keyboard.lock) {
            try {
              await nav.keyboard.lock();
            console.log('Keyboard locked');
          } catch (error) {
            console.warn('Could not lock keyboard:', error);
            }
          }
        }
      } catch (error) {
        console.error('Error entering fullscreen:', error);
      }
    }
  };

  const handleExitFullscreen = async () => {
    try {
      // Unlock keyboard when exiting fullscreen
      const nav = navigator as NavigatorWithKeyboard;
      if (nav.keyboard && nav.keyboard.unlock) {
        await nav.keyboard.unlock();
        console.log('Keyboard unlocked');
      }
    } catch (error) {
      console.warn('Could not unlock keyboard:', error);
    }
  };

  return { handleFullscreen, handleExitFullscreen, iframeRef };
};