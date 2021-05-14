import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  badgeItem: {
    src: string;
    content: string;
  };
}
const Badge = ({ badgeItem }: Props): ReactElement => {
  return (
    <S.Container>
      <S.ImgBox>
        <img src={badgeItem.src} alt="배지" />
      </S.ImgBox>
      <S.Span>{badgeItem.content}</S.Span>
    </S.Container>
  );
};

export default Badge;
