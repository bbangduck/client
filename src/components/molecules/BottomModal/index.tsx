import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
  firstBtn?: string;
  secondBtn: string;
  visibleContentRef: React.MutableRefObject<HTMLDivElement | null>;
  clickOutside: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onDelete: () => void;
}
const BottomModal = ({
  title,
  firstBtn,
  secondBtn,
  visibleContentRef,
  clickOutside,
  onDelete,
}: Props): ReactElement => {
  const onDeleteClick = () => {
    onDelete();
  };

  return (
    <S.Container onClick={clickOutside}>
      <S.Box ref={visibleContentRef}>
        <S.Title>{title}</S.Title>
        {firstBtn ? <S.Btn>{firstBtn}</S.Btn> : null}
        <S.Btn2 onClick={onDeleteClick}>{secondBtn}</S.Btn2>
      </S.Box>
    </S.Container>
  );
};

export default BottomModal;
