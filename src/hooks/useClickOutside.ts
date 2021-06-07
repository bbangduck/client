import { useState, useRef, useEffect } from 'react';

export const useClickOutside = (
  initialValue: boolean,
): [
  React.MutableRefObject<HTMLDivElement | null>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
] => {
  const visibleContentRef = useRef<null | HTMLDivElement>(null);
  const [modalOn, setModalOn] = useState<boolean>(initialValue);

  useEffect(() => {
    if (modalOn) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  }, [modalOn]);

  const clickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      e.target instanceof HTMLDivElement &&
      visibleContentRef.current &&
      !visibleContentRef.current.contains(e.target) &&
      setModalOn
    ) {
      setModalOn(false);
    }
  };

  return [visibleContentRef, modalOn, setModalOn, clickOutside];
};
