import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import ClauseTemplate from '../../../components/templates/ClauseTemplate';

const ClausePage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 이용약관</title>
        <meta name="title" content="빵덕 이용약관" />
        <meta name="description" content="빵덕 마이페이지 이용약관 안내페이지입니다." />
      </Helmet>
      <ClauseTemplate />
    </>
  );
};

export default ClausePage;
