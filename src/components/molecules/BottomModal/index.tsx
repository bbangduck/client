import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
  firstBtn?: string;
  secondBtn?: string;
  lastBtn: string;
  visibleContentRef: React.MutableRefObject<HTMLDivElement | null>;
  clickOutside: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onLastClick: () => void;
  onFirstClick?: () => void;
  onSecondClick?: () => void;
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
  const onLastBtnClick = () => {
    onLastClick();
  };

  const onSecondBtnClick = () => {
    if (onSecondClick) onSecondClick();
  };

  const onFirstBtnClick = () => {
    if (onFirstClick) onFirstClick();
  };

  return (
    <S.Container onClick={clickOutside} isOn={isOn}>
      <S.Box ref={visibleContentRef} isOn={isOn}>
        <S.Title>{title}</S.Title>
        {firstBtn ? <S.Btn onClick={onFirstBtnClick}>{firstBtn}</S.Btn> : null}
        {secondBtn ? <S.Btn onClick={onSecondBtnClick}>{secondBtn}</S.Btn> : null}
        <S.Btn2 onClick={onLastBtnClick}>{lastBtn}</S.Btn2>
      </S.Box>
    </S.Container>
  );
};

export default BottomModal;
