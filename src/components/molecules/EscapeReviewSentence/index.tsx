import React, { ReactElement } from 'react';
import * as S from './style';

const EscapeReviewSentence = (): ReactElement => {
  return (
    <div>
      <S.PTag>탈출 감상평을 남겨주세요 (필수)</S.PTag>
      <S.TextArea autoComplete="off" required />
    </div>
  );
};

export default EscapeReviewSentence;
