import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ThemeAnalysisTemplate from '../../components/templates/ThemeAnalysisTemplate';

const ThemeAnalysisPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 테마분석상세</title>
        <meta name="title" content="빵덕 테마분석상세" />
        <meta name="description" content="빵덕 특정테마에대한 분석을 막대그래프로 나타낸 페이지입니다." />
      </Helmet>
      <ThemeAnalysisTemplate />
    </>
  );
};

export default ThemeAnalysisPage;
