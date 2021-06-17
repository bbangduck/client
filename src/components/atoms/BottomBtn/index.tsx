import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
  onClick?: () => void;
}
const BottomBtn = ({ content, onClick }: Props): ReactElement => {
  const onBtnClick = () => {
    if (onClick) onClick();
  };

  return (
    <S.Container onClick={onBtnClick} type="submit" data-blink="cover">
      <S.PTag data-blink="cover">{content}</S.PTag>
    </S.Container>
  );
};

export default BottomBtn;
