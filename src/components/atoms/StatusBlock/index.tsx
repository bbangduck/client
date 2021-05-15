import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
  color: string;
  border: boolean;
  padding: number;
}
const StatusBlock = ({ content, color, border, padding }: Props): ReactElement => {
  return (
    <S.Container border={border} padding={padding}>
      <S.Span color={color}>{content}</S.Span>
    </S.Container>
  );
};

export default StatusBlock;
