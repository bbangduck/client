import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import ReviewDetailInfo from '../../molecules/ReviewDetailInfo';
import ReviewCheckList from '../../molecules/ReviewCheckList';

const ThemeReviewTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader arrow={left} content="리뷰 작성" />
      <ReviewDetailInfo />
      <ReviewCheckList />
    </section>
  );
};

export default ThemeReviewTemplate;
