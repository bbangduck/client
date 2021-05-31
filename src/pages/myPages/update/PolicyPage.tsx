import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import PolicyTemplate from '../../../components/templates/PolicyTemplate';

const PolicyPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 개인정보 처리방침</title>
        <meta name="title" content="빵덕 개인정보 처리방침" />
        <meta name="description" content="빵덕 마이페이지 개인정보 처리방침 안내페이지입니다." />
      </Helmet>
      <PolicyTemplate />
    </>
  );
};

export default PolicyPage;
