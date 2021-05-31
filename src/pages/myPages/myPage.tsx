import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import MyPageTemplate from '../../components/templates/MyPageTemplate';

const MyPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 마이페이지</title>
        <meta name="title" content="빵덕 마이페이지" />
        <meta
          name="description"
          content="빵덕 마이페이지, 내정보, 내정보수정, 방탈출 현황, 획득배지, 관심테마,공지사항"
        />
      </Helmet>
      <MyPageTemplate />
    </>
  );
};

export default MyPage;
