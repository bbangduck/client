import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import RemoveAccountTemplate from '../../../components/templates/RemoveAccountTemplate';

const RemoveAccountPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 회원탈퇴</title>
        <meta name="title" content="빵덕 회원탈퇴" />
        <meta name="description" content="빵덕 마이페이지 회원탈퇴가 가능합니다." />
      </Helmet>
      <RemoveAccountTemplate />
    </>
  );
};

export default RemoveAccountPage;
