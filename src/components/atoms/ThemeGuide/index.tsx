import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  pointMark: string;
  content: string;
  subContent?: string;
  color: string;
  bgColor: string;
}
const ThemeGuide = ({ pointMark, content, subContent, color, bgColor }: Props): ReactElement => {
  return (
    <S.Box bgColor={bgColor}>
      <S.Img src={pointMark} alt="강조" />
      <S.PTag color={color}>
        {content}
        <br />
        {subContent && subContent}
      </S.PTag>
    </S.Box>
  );
};

export default ThemeGuide;
