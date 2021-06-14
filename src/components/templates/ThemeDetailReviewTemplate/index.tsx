import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import ReviewDetailInfo from '../../molecules/ReviewDetailInfo';
import ReviewDetail from '../../organisms/ReviewDetail';

const ThemeDetailReviewTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader arrow={left} content="상세리뷰 작성" />
      <ReviewDetailInfo />
      <ReviewDetail />
    </section>
  );
};

export default ThemeDetailReviewTemplate;
