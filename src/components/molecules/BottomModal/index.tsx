import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
  firstBtn?: string;
  secondBtn?: string | string[];
  lastBtn: string;
  visibleContentRef: React.MutableRefObject<HTMLDivElement | null>;
  clickOutside: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onLastClick: (content: string) => void;
  onFirstClick?: (content: string) => void;
  onSecondClick?: (content: string) => void;
  isOn: boolean;
}
const BottomModal = ({
  title,
  firstBtn,
  secondBtn,
  lastBtn,
  visibleContentRef,
  clickOutside,
  onLastClick,
  onFirstClick,
  onSecondClick,
  isOn,
}: Props): ReactElement => {
  const onFirstBtnClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (onFirstClick) onFirstClick(e.currentTarget.innerText);
  };

  const onSecondBtnClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (onSecondClick) onSecondClick(e.currentTarget.innerText);
  };

  const onLastBtnClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    onLastClick(e.currentTarget.innerText);
  };

  return (
    <S.Container onClick={clickOutside} isOn={isOn}>
      <S.Box ref={visibleContentRef} isOn={isOn}>
        <S.Title>{title}</S.Title>
        {firstBtn ? (
          <S.Btn onClick={(e) => onFirstBtnClick(e)} data-blink="blink">
            {firstBtn}
          </S.Btn>
        ) : null}
        {Array.isArray(secondBtn)
          ? secondBtn?.map((btn) => (
              <S.Btn onClick={(e) => onSecondBtnClick(e)} data-blink="blink">
                {btn}
              </S.Btn>
            ))
          : null}
        {secondBtn && typeof secondBtn === 'string' ? (
          <S.Btn onClick={(e) => onSecondBtnClick(e)} data-blink="blink">
            {secondBtn}
          </S.Btn>
        ) : null}
        <S.Btn2 onClick={(e) => onLastBtnClick(e)} data-blink="blink">
          {lastBtn}
        </S.Btn2>
      </S.Box>
    </S.Container>
  );
};

export default BottomModal;
