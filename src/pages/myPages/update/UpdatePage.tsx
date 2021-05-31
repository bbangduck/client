import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import UpdateTemplate from '../../../components/templates/UpdateTemplate';

const UpdatePage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 설정</title>
        <meta name="title" content="빵덕 설정" />
        <meta
          name="description"
          content="빵덕 마이페이지 설정페이지에서는 프로필변경, 개인정보 처리방침,이용약관,로그아웃,회원탈퇴가 가능합니다."
        />
      </Helmet>
      <UpdateTemplate />
    </>
  );
};

export default UpdatePage;
