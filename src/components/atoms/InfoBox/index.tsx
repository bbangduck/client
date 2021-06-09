import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
  bgColor: string;
  color: string;
  marginRight: number;
  borderRadius?: number;
  marginBottom?: number;
}
const InfoBox = ({ content, bgColor, color, marginRight, borderRadius, marginBottom }: Props): ReactElement => {
  return (
    <S.Box
      bgColor={bgColor}
      marginRight={marginRight}
      borderRadius={borderRadius || 0}
      marginBottom={marginBottom || 0}
    >
      <S.Span color={color}>{content}</S.Span>
    </S.Box>
  );
};

export default InfoBox;
