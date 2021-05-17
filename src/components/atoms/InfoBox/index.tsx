import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
  bgColor: string;
  color: string;
  marginRight: number;
}
const InfoBox = ({ content, bgColor, color, marginRight }: Props): ReactElement => {
  return (
    <S.Box bgColor={bgColor} marginRight={marginRight}>
      <S.Span color={color}>{content}</S.Span>
    </S.Box>
  );
};

export default InfoBox;
