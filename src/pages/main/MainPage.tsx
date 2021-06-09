import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import MainTemplate from '../../components/templates/MainTemplate';

const MainPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 홈</title>
        <meta name="title" content="빵덕 메인페이지" />
        <meta name="description" content="빵덕 메인페이지, 빵덕이 추천하는 신규테마,인기테마를 확인하세요." />
      </Helmet>
      <MainTemplate />
    </>
  );
};

export default MainPage;
