import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
  color: string;
  border: boolean;
}
const StatusBlock = ({ content, color, border }: Props): ReactElement => {
  return (
    <S.Container border={border}>
      <S.Span color={color}>{content}</S.Span>
    </S.Container>
  );
};

export default StatusBlock;
