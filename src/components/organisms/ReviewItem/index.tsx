import React, { ReactElement } from 'react';
import * as S from './style';
import ReviewItemRight from '../ReviewItemRight';

const ReviewItem = (): ReactElement => {
  return (
    <S.Li>
      <S.ImgBox>{/* <img src="/" alt="s" /> */}</S.ImgBox>
      <ReviewItemRight />
    </S.Li>
  );
};

export default ReviewItem;
