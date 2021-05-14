import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
  content: string;
  onClick: () => void;
};
const BottomBtn = ({ content, onClick }: Props): ReactElement => {
  const onBtnClick = () => {
    onClick();
  };

  return (
    <S.Container onClick={onBtnClick}>
      <S.PTag>{content}</S.PTag>
    </S.Container>
  );
};

export default BottomBtn;
