import React, { ReactElement } from 'react';
import * as Styled from './style';

const Tendency = ({ tendency }: { tendency: string }): ReactElement => {
  return (
    <Styled.Container>
      <Styled.Span>#{tendency}</Styled.Span>
    </Styled.Container>
  );
};

export default Tendency;
