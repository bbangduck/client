import { useEffect, useRef } from 'react';

export const useThemeObserver = (
  setState: React.Dispatch<React.SetStateAction<number>>,
  stateNumber: number,
): React.MutableRefObject<HTMLElement | null>[] => {
  const isRef = useRef<HTMLElement | null>(null);
  const option = { rootMargin: `-${window.innerHeight / 2 - 1}px 0px` };

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setState(stateNumber);
      }
    }, option);

    if (isRef.current) {
      observer.observe(isRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [isRef];
};
