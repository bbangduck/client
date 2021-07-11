import React, { ReactElement } from 'react';
import useReviewInfinite from '../../../swr/useReviewInfinite';
import PlayedPeople from '../../molecules/PlayedPeople';
import ReviewHeader from '../../molecules/ReviewHeader';
import ReviewList from '../ReviewList';
import * as S from './style';

interface Props {
  isRef: React.MutableRefObject<HTMLElement | null>;
  themeId: string;
}
const ThemeReview = ({ isRef, themeId }: Props): ReactElement => {
  const { data } = useReviewInfinite(themeId, 'LIKE_COUNT_DESC');

  return (
    <S.Section ref={isRef}>
      <PlayedPeople themeId={themeId} />
      <ReviewHeader />
      {data?.[0] ? (
        <ReviewList data={data} />
      ) : (
        <S.EmptyBox>
          <S.PTag>첫 리뷰를 남겨주세요</S.PTag>
        </S.EmptyBox>
      )}
    </S.Section>
  );
};

export default ThemeReview;
