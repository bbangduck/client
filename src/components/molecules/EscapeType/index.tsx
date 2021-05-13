import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  icon: string;
  content: string;
  count: number;
}
const EscapeType = ({ icon, content, count }: Props): ReactElement => {
  return (
    <S.Container>
      <S.Img src={icon} alt="doorIcon" />
      <S.PTag>{content}</S.PTag>
      <S.SpanTag>{count}</S.SpanTag>
    </S.Container>
  );
};

export default EscapeType;
