import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import ThemeTemplate from '../../components/templates/ThemeTemplate';

const ThemePage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 테마</title>
        <meta name="title" content="빵덕 테마" />
        <meta name="description" content="빵덕 테마페이지, 방탈출의 모든 테마를 유형별로 찾아보세요." />
      </Helmet>
      <ThemeTemplate />
    </>
  );
};

export default ThemePage;
