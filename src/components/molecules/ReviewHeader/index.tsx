import React, { ReactElement } from 'react';
import * as S from './style';
import more from '../../../assets/images/lineUp/lineUp.png';

const ReviewHeader = (): ReactElement => {
  return (
    <S.Container>
      <S.PTag>리뷰 45</S.PTag>
      <S.Box>
        <img src={more} alt="정렬버튼" />
        <S.Span>정렬</S.Span>
      </S.Box>
    </S.Container>
  );
};

export default ReviewHeader;
