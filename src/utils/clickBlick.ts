const blinkNewElement = (element: HTMLElement) => {
  const newElement = document.createElement('div');
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  newElement.style.width = `${width}px`;
  newElement.style.height = `${height}px`;
  newElement.style.position = 'absolute';
  newElement.style.top = '0';
  newElement.style.left = '0';
  newElement.className = 'click-blink';

  element.appendChild(newElement);
  setTimeout(() => {
    element.removeChild(newElement);
  }, 200);
};

const blinkBackground = (element: HTMLElement) => {
  element.classList.add('click-blink');
  setTimeout(() => {
    element.classList.remove('click-blink');
  }, 200);
};

const clickBlink = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
  e.stopPropagation();

  const target = e.target as HTMLElement;
  const currentElement = target;
  const parent = target.parentElement;
  const oldParent = parent?.parentElement;

  if (currentElement.dataset.blink === 'blink') {
    if (parent && parent.dataset.blink === 'blink') {
      if (oldParent && oldParent.dataset.blink === 'blink') {
        blinkBackground(oldParent);
      } else {
        blinkBackground(parent);
      }
    } else {
      blinkBackground(currentElement);
    }
  }

  if (currentElement.dataset.blink === 'cover') {
    if (parent && parent.dataset.blink === 'cover') {
      if (oldParent && oldParent.dataset.blink === 'cover') {
        blinkNewElement(oldParent);
      } else {
        blinkNewElement(parent);
      }
    } else {
      blinkNewElement(currentElement);
    }
  }
};

export default clickBlink;
