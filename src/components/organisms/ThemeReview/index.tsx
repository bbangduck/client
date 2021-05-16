import React, { ReactElement } from 'react';
import PlayedPeople from '../../molecules/PlayedPeople';
import ReviewHeader from '../../molecules/ReviewHeader';
import * as S from './style';

const ThemeReview = (): ReactElement => {
  return (
    <S.Section>
      <PlayedPeople />
      <ReviewHeader />
    </S.Section>
  );
};

export default ThemeReview;
