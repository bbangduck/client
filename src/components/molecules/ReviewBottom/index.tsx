import React, { ReactElement } from 'react';
import heart from '../../../assets/images/heart/heart.png';
import pen from '../../../assets/images/pen/whitePen.png';
import * as S from './style';

const ReviewBottom = (): ReactElement => {
  return (
    <S.Container>
      <S.leftBox>
        <img src={heart} alt="좋아요" />
        <S.Line />
      </S.leftBox>
      <S.CafeBox>
        <S.PTag>카페 바로가기</S.PTag>
      </S.CafeBox>
      <S.ReviewBox>
        <S.Img src={pen} alt="리뷰 작성" />
        <S.P>리뷰 작성</S.P>
      </S.ReviewBox>
    </S.Container>
  );
};

export default ReviewBottom;
