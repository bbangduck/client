import React, { ReactElement } from 'react';
import { clearCache } from 'react-router-cache-route';
import EscapeMoment from '../../molecules/EscapeMoment';
import EscapeReviewSentence from '../../molecules/EscapeReviewSentence';
import ExtraReview from '../ExtraReview';
import * as S from './style';

const ReviewDetail = (): ReactElement => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearCache();
    console.log(clearCache);
  };

  return (
    <div>
      <S.PTag>사진 및 감상평</S.PTag>
      <EscapeMoment />
      <form onSubmit={onSubmit}>
        <EscapeReviewSentence />
        <ExtraReview />
        <S.BtnBox>
          <S.Btn type="submit" data-blink="blink">
            작성 완료
          </S.Btn>
        </S.BtnBox>
      </form>
    </div>
  );
};

export default ReviewDetail;
