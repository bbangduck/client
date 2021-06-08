import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import SignUpEmailTemplate from '../../components/templates/SignUpEmailTemplate';

const SignUpEmailPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 회원가입 이메일</title>
        <meta name="title" content="빵덕 회원가입 이메일" />
        <meta name="description" content="빵덕 회원가입 이메일을 가입해주세요." />
      </Helmet>
      <SignUpEmailTemplate />
    </>
  );
};

export default SignUpEmailPage;
