import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import LoginClauseTemplate from '../../components/templates/LoginClauseTemplate';

const LoginClausePage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 로그인 이용약관</title>
        <meta name="title" content="빵덕 로그인 이용약관" />
        <meta name="description" content="빵덕 로그인 이용약관을 동의해주세요." />
      </Helmet>
      <LoginClauseTemplate />
    </>
  );
};

export default LoginClausePage;
