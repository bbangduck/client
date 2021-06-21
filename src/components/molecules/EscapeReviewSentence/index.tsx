import React, { ReactElement } from 'react';
import * as S from './style';

const EscapeReviewSentence = (): ReactElement => {
  return (
    <S.Container>
      <S.PTag>탈출 감상평을 남겨주세요 (필수)</S.PTag>
      <S.TextArea
        autoComplete="off"
        required
        placeholder="감상평을 작성해주세요(최소 10자,최대 1000자)"
        maxLength={1000}
        minLength={10}
      />
    </S.Container>
  );
};

export default EscapeReviewSentence;
