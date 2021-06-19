import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import MapTemplate from '../../components/templates/MapTemplate';

const mapPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 지도</title>
        <meta name="title" content="빵덕 지도페이지" />
        <meta name="description" content="빵덕 지도페이지, 나의 위치에서 가장 가까운 방탈출카페와 테마를 찾아보세요." />
      </Helmet>
      <MapTemplate />
    </>
  );
};

export default mapPage;
