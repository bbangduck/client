import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import SignUpClauseTemplate from '../../components/templates/SignUpClauseTemplate';

const SignUpClausePage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 회원가입 이용약관</title>
        <meta name="title" content="빵덕 회원가입 이용약관" />
        <meta name="description" content="빵덕 회원가입 이용약관을 동의해주세요." />
      </Helmet>
      <SignUpClauseTemplate />
    </>
  );
};

export default SignUpClausePage;
