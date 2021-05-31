import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import LoginSignUpTemplate from '../../components/templates/LoginSignUpTemplate';

const LoginSignUpPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 회원가입</title>
        <meta name="title" content="빵덕 회원가입" />
        <meta name="description" content="빵덕 이용을 위한 회원가입입니다." />
      </Helmet>
      <LoginSignUpTemplate />
    </>
  );
};

export default LoginSignUpPage;
