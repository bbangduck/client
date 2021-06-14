import React, { ReactElement } from 'react';
import EscapeMoment from '../../molecules/EscapeMoment';
import EscapeReviewSentence from '../../molecules/EscapeReviewSentence';
import ExtraReview from '../ExtraReview';
import * as S from './style';

const ReviewDetail = (): ReactElement => {
  return (
    <div>
      <S.PTag>사징 및 감상평</S.PTag>
      <EscapeMoment />
      <EscapeReviewSentence />
      <ExtraReview />
      <S.BtnBox>
        <S.Btn type="button">작성 완료</S.Btn>
      </S.BtnBox>
    </div>
  );
};

export default ReviewDetail;
