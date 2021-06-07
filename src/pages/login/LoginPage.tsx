import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import LoginTemplate from '../../components/templates/LoginTemplate';

const LoginPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 로그인</title>
        <meta name="title" content="빵덕 로그인" />
        <meta name="description" content="빵덕 로그인에서는 카카오로그인, 네이버로그인이 가능합니다." />
      </Helmet>
      <LoginTemplate />
    </>
  );
};

export default LoginPage;
