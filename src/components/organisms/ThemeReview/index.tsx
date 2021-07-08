import React, { ReactElement } from 'react';
import useSWR from 'swr';
import useReviewInfinite from '../../../swr/useReviewInfinite';
import PlayedPeople from '../../molecules/PlayedPeople';
import ReviewHeader from '../../molecules/ReviewHeader';
import ReviewList from '../ReviewList';
import * as S from './style';

interface Props {
  isRef: React.MutableRefObject<HTMLElement | null>;
  event?: boolean;
  themeId: string;
}
const ThemeReview = ({ isRef, event, themeId }: Props): ReactElement => {
  // useReviewInfinite(themeId, 'LIKE_COUNT_DESC');

  return (
    <S.Section ref={isRef}>
      <PlayedPeople themeId={themeId} />
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
