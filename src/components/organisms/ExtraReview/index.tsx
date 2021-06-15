import React, { ReactElement, useState } from 'react';
import arrow from '../../../assets/images/arrow/downWhite.png';
import point from '../../../assets/images/pointmark/pointMark.png';
import ExtraReviewList from '../ExtraReviewList';
import * as S from './style';

const ExtraReview = (): ReactElement => {
  const [reviewListOn, setReviewListOn] = useState(false);

  return (
    <div>
      <S.Box isOn={reviewListOn}>
        <S.PTag>방탈출 평가하기</S.PTag>
        <S.RightBox onClick={() => setReviewListOn((prev) => !prev)}>
          <S.Span>평가할래요!</S.Span>
          <img src={arrow} alt="평가하기" />
        </S.RightBox>
      </S.Box>
      {reviewListOn ? <ExtraReviewList /> : null}
      <S.Announce isOn={reviewListOn}>
        <img src={point} alt="강조" />
        <S.PTag2>
          매월 설문참여자 10분을 선정하여서
          <br />
          방탈출 1회 10,000원 할인권을 증정합니다.
        </S.PTag2>
      </S.Announce>
    </div>
  );
};

export default ExtraReview;
