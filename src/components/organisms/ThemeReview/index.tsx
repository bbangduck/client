import React, { ReactElement, useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import useReviewInfinite from '../../../swr/useReviewInfinite';
import PlayedPeople from '../../molecules/PlayedPeople';
import ReviewHeader from '../../molecules/ReviewHeader';
import ReviewList from '../ReviewList';
import * as S from './style';
import BottomModal from '../../molecules/BottomModal';

interface Props {
  isRef: React.MutableRefObject<HTMLElement | null>;
  themeId: string;
}
const ThemeReview = ({ isRef, themeId }: Props): ReactElement => {
  const [sequenceCondition, setSequenceCondition] = useState('LATEST');
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);
  const { data } = useReviewInfinite(themeId, sequenceCondition);
  const onReviewFilterClick = () => {
    setModalOn(true);
  };
  const onSequenceClick = (content: string) => {
    setModalOn(false);
    if (content === '최신순') setSequenceCondition('LATEST');
    if (content === '평점 높은순') setSequenceCondition('RATING_ASC');
    if (content === '평점 낮은순') setSequenceCondition('RATING_DESC');
    if (content === '좋아요 높은순') setSequenceCondition('LIKE_COUNT_ASC');
    if (content === '좋아요 낮은순') setSequenceCondition('LIKE_COUNT_DESC');
  };

  return (
    <S.Section ref={isRef}>
      <PlayedPeople themeId={themeId} />
      <ReviewHeader onReviewFilterClick={onReviewFilterClick} />
      {data?.[0] ? (
        <ReviewList data={data} />
      ) : (
        <S.EmptyBox>
          <S.PTag>첫 리뷰를 남겨주세요</S.PTag>
        </S.EmptyBox>
      )}
      <S.Box>
        <BottomModal
          title="정렬"
          firstBtn="최신순"
          secondBtn={['평점 높은순', '평점 낮은순', '좋아요 높은순']}
          lastBtn="좋아요 낮은순"
          visibleContentRef={visibleContentRef}
          clickOutside={clickOutside}
          onFirstClick={onSequenceClick}
          onSecondClick={onSequenceClick}
          onLastClick={onSequenceClick}
          isOn={modalOn}
        />
      </S.Box>
    </S.Section>
  );
};

export default ThemeReview;
