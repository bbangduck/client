import React, { ReactElement } from 'react';
import PlayedPeople from '../../molecules/PlayedPeople';
import ReviewHeader from '../../molecules/ReviewHeader';
import ReviewList from '../ReviewList';
import * as S from './style';

interface Props {
  isRef: React.MutableRefObject<HTMLElement | null>;
}
const ThemeReview = ({ isRef }: Props): ReactElement => {
  return (
    <S.Section ref={isRef}>
      <PlayedPeople />
      <ReviewHeader />
      <ReviewList />
    </S.Section>
  );
};

export default ThemeReview;
