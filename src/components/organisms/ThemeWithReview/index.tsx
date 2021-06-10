import React, { ReactElement } from 'react';
import ThumbNail from '../../molecules/ThumbNail';
import * as S from './style';

const ThemeWithReview = (): ReactElement => {
  return (
    <S.Section>
      <S.H2>리뷰 가득 테마</S.H2>
      <S.Ul>
        <ThumbNail />
        <ThumbNail />
      </S.Ul>
    </S.Section>
  );
};

export default ThemeWithReview;
