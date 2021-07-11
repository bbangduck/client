import React, { ReactElement } from 'react';
import * as S from './style';
import more from '../../../assets/images/lineUp/lineUp.svg';

interface Props {
  onReviewFilterClick: () => void;
}
const ReviewHeader = ({ onReviewFilterClick }: Props): ReactElement => {
  return (
    <S.Container>
      <S.PTag>리뷰 45</S.PTag>
      <S.Box data-blink="blink" onClick={onReviewFilterClick}>
        <img src={more} alt="정렬버튼" data-blink="blink" />
        <S.Span data-blink="blink">정렬</S.Span>
      </S.Box>
    </S.Container>
  );
};

export default ReviewHeader;
