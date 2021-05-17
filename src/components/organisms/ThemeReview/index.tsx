import React, { ReactElement } from 'react';
import PlayedPeople from '../../molecules/PlayedPeople';
import ReviewHeader from '../../molecules/ReviewHeader';
import ReviewList from '../ReviewList';
import * as S from './style';

interface Props {
  isRef: React.MutableRefObject<HTMLElement | null>;
  event?: boolean;
}
const ThemeReview = ({ isRef, event }: Props): ReactElement => {
  return (
    <S.Section ref={isRef}>
      <PlayedPeople />
      <ReviewHeader />
      {event ? (
        <ReviewList />
      ) : (
        <S.EmptyBox>
          <S.PTag>첫 리뷰를 남겨주세요</S.PTag>
        </S.EmptyBox>
      )}
    </S.Section>
  );
};

export default ThemeReview;
