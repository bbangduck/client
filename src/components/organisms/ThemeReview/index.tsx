import React, { ReactElement } from 'react';
import PlayedPeople from '../../molecules/PlayedPeople';
import ReviewHeader from '../../molecules/ReviewHeader';
import ReviewList from '../ReviewList';
import * as S from './style';

const ThemeReview = (): ReactElement => {
  return (
    <S.Section>
      <PlayedPeople />
      <ReviewHeader />
      <ReviewList />
    </S.Section>
  );
};

export default ThemeReview;
