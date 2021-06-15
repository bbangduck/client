import React, { ReactElement } from 'react';
import ReviewDetailStisfaction from '../ReviewDetailStisfaction';
import ReviewDetailThemeInfo from '../ReviewDetailThemeInfo';
import ReviewDetailThemeKind from '../ReviewDetailThemeKind';
import * as S from './style';

const ExtraReviewList = (): ReactElement => {
  return (
    <S.Container>
      <ReviewDetailThemeInfo />
      <ReviewDetailThemeKind />
      <ReviewDetailStisfaction />
    </S.Container>
  );
};

export default ExtraReviewList;
