import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
}
const StatusBlock = ({ content }: Props): ReactElement => {
  return (
    <S.Container>
      <S.Span>{content}</S.Span>
    </S.Container>
  );
};

export default StatusBlock;
