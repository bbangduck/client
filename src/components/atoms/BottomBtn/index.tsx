import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
  onClick?: () => void;
}
const BottomBtn = ({ content, onClick }: Props): ReactElement => {
  const onBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // e.preventDefault();
    if (onClick) onClick();
  };

  return (
    <S.Container onClick={onBtnClick}>
      <S.PTag>{content}</S.PTag>
    </S.Container>
  );
};

export default BottomBtn;
