import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToId = useCallback((id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return { scrollToId };
};
