import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  icon: string;
  content: string;
  count: string;
}
const EscapeType = ({ icon, content, count }: Props): ReactElement => {
  return (
    <S.Container>
      <S.Img src={icon} alt="현황 이미지" />
      <S.PTag>{content}</S.PTag>
      <S.SpanTag>{count}</S.SpanTag>
    </S.Container>
  );
};

export default EscapeType;
