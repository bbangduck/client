import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import NoticeTemplate from '../../../components/templates/NoticeTemplate';

const NoticePage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 공지사항</title>
        <meta name="title" content="빵덕 공지사항" />
        <meta name="description" content="빵덕 마이페이지, 공지사항을 모두 확인가능합니다." />
      </Helmet>
      <NoticeTemplate />
    </>
  );
};

export default NoticePage;
