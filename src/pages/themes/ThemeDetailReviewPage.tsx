import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import ThemeDetailReviewTemplate from '../../components/templates/ThemeDetailReviewTemplate';

const ThemeDetailReviewPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 상세리뷰</title>
        <meta name="title" content="빵덕 상세리뷰" />
        <meta name="description" content="빵덕 특정테마에대한 테마상세리뷰를 남겨주세요." />
      </Helmet>
      <ThemeDetailReviewTemplate />
    </>
  );
};

export default ThemeDetailReviewPage;
