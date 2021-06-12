import React, { ReactElement } from 'react';
import defaultStar from '../../../assets/images/star/grayStar.png';
import blackStar from '../../../assets/images/star/blackStar.png';
import * as S from './style';

const ReviewThemeScore = (): ReactElement => {
  return (
    <S.Container>
      <S.PTag>테마의 평점은?</S.PTag>
      <S.Box>
        <img src={blackStar} alt="평점" />
        <img src={blackStar} alt="평점" />
        <img src={blackStar} alt="평점" />
        <img src={blackStar} alt="평점" />
        <img src={blackStar} alt="평점" />
      </S.Box>
    </S.Container>
  );
};

export default ReviewThemeScore;
