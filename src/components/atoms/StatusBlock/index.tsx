import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content?: string;
  color: string;
  bgColor?: string;
  border: boolean;
  padding: number;
  shadow?: boolean;
}
const StatusBlock = ({ content, color, bgColor, border, padding, shadow }: Props): ReactElement => {
  return (
    <S.Container border={border} padding={padding} bgColor={bgColor} shadow={shadow}>
      <S.Span color={color}>{content}</S.Span>
    </S.Container>
  );
};

export default StatusBlock;
