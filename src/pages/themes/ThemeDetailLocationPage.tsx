import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import ThemeLocationTemplate from '../../components/templates/ThemeLocationTemplate';

const ThemeDetailLocationPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 테마상세위치</title>
        <meta name="title" content="빵덕 테마상세위치" />
        <meta name="description" content="빵덕 특정테마에대한 지도 위치를 알려드립니다." />
      </Helmet>
      <ThemeLocationTemplate />
    </>
  );
};

export default ThemeDetailLocationPage;
