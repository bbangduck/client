/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, ReactElement } from 'react';

const useLastThemeObserver = (
  setSize: (size: number | ((sizes: number) => number)) => Promise<any[] | undefined>,
): [lastRef: React.MutableRefObject<HTMLLIElement | null>] => {
  const lastRef = useRef<null | HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setSize((prevSize) => prevSize + 1);
      }
    });

    if (lastRef.current) {
      observer.observe(lastRef.current);
    }
  }, []);

  return [lastRef];
};

export default useLastThemeObserver;
