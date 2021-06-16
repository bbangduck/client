const clickBlink = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
  e.stopPropagation();

  const target = e.target as HTMLElement;
  const currentElement = target;
  const parent = target.parentElement;
  const oldParent = parent?.parentElement;

  if (currentElement.dataset.blink === 'blink') {
    if (parent && parent.dataset.blink === 'blink') {
      if (oldParent && oldParent.dataset.blink === 'blink') {
        oldParent.classList.add('click-blink');
        setTimeout(() => {
          oldParent.classList.remove('click-blink');
        }, 200);
      } else {
        parent.classList.add('click-blink');
        setTimeout(() => {
          parent.classList.remove('click-blink');
        }, 200);
      }
    } else {
      currentElement.classList.add('click-blink');
      setTimeout(() => {
        currentElement.classList.remove('click-blink');
      }, 200);
    }
  }
};

export default clickBlink;
