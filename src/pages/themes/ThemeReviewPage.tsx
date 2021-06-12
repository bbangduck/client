import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import ThemeReviewTemplate from '../../components/templates/ThemeReviewTemplate';

const ThemeReviewPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 테마리뷰</title>
        <meta name="title" content="빵덕 테마테마리뷰" />
        <meta name="description" content="빵덕 특정테마에대한 테마리뷰를 남겨주세요." />
      </Helmet>
      <ThemeReviewTemplate />
    </>
  );
};

export default ThemeReviewPage;
