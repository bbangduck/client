import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import StatusTemplate from '../../../components/templates/StatusTemplate';

const StatusPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 방탈출 현황</title>
        <meta name="title" content="빵덕 방탈출 현황" />
        <meta
          name="description"
          content="빵덕 방탈출 현황, 카페지점과 테마,리뷰,성적 나의 방탈출 현황과 성적을 모두 확인가능합니다."
        />
      </Helmet>
      <StatusTemplate />
    </>
  );
};

export default StatusPage;
