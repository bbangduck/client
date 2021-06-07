import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import SignUpNickNameTemplate from '../../components/templates/SignUpNickNameTemplate';

const SignUpNickNamePage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 회원가입 닉네임</title>
        <meta name="title" content="빵덕 회원가입 닉네임" />
        <meta name="description" content="빵덕 회원가입 닉네임을 등록해주세요." />
      </Helmet>
      <SignUpNickNameTemplate />
    </>
  );
};

export default SignUpNickNamePage;
