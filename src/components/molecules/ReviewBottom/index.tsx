import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import heart from '../../../assets/images/heart/heart.png';
import pen from '../../../assets/images/pen/whitePen.png';
import * as S from './style';

const ReviewBottom = (): ReactElement => {
  const history = useHistory();

  return (
    <S.Container>
      <S.leftBox data-blink="blink">
        <img src={heart} alt="좋아요" data-blink="blink" />
        <S.Line />
      </S.leftBox>
      <S.CafeBox data-blink="blink">
        <S.PTag data-blink="blink">카페 바로가기</S.PTag>
      </S.CafeBox>
      <S.ReviewBox onClick={() => history.push('/theme/:name/review')} data-blink="blink">
        <S.Img src={pen} alt="리뷰 작성" data-blink="blink" />
        <S.P data-blink="blink">리뷰 작성</S.P>
      </S.ReviewBox>
    </S.Container>
  );
};

export default ReviewBottom;
