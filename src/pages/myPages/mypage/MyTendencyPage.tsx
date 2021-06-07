import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import MyTendencyTemplate from '../../../components/templates/MyTendencyTemplate';

const MyTendencyPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 빵덕이 분석했어요</title>
        <meta name="title" content="빵덕이 분석했어요" />
        <meta name="description" content="빵덕이 분석했어요, 당신의 방탈출 성향을 분석해드립니다." />
      </Helmet>
      <MyTendencyTemplate />
    </>
  );
};

export default MyTendencyPage;
