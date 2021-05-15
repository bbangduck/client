import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
  bgColor: string;
  color: string;
}
const InfoBox = ({ content, bgColor, color }: Props): ReactElement => {
  return (
    <S.Box bgColor={bgColor}>
      <S.Span color={color}>{content}</S.Span>
    </S.Box>
  );
};

export default InfoBox;
