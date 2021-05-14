import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
  date: string;
}
const PolicyTitle = ({ title, date }: Props): ReactElement => {
  return (
    <S.Container>
      <S.H1>{title}</S.H1>
      <S.Span>본 약관은 {date} 부터 적용됩니다.</S.Span>
    </S.Container>
  );
};

export default PolicyTitle;
