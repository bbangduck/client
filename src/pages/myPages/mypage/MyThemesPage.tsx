import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import MyThemeTemplate from '../../../components/templates/MyThemesTemplate';

const MyThemesPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 관심테마</title>
        <meta name="title" content="빵덕 관심테마" />
        <meta name="description" content="빵덕 관심테마, 당신의 테마를 골라보세요." />
      </Helmet>
      <MyThemeTemplate />
    </>
  );
};

export default MyThemesPage;
