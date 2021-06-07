import React, { ReactElement } from 'react';
import * as Styled from './style';

interface HashProps {
  tendency: string;
  color: string;
  bgColor: string;
  leftMargin?: string;
  rightMargin: string;
}
const HashBox = ({ tendency, color, bgColor, leftMargin, rightMargin }: HashProps): ReactElement => {
  return (
    <Styled.Container bgColor={bgColor} leftMargin={leftMargin} rightMargin={rightMargin}>
      <Styled.Span color={color}>#{tendency}</Styled.Span>
    </Styled.Container>
  );
};

export default HashBox;
