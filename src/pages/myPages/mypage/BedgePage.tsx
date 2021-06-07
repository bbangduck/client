import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import BedgeTemplate from '../../../components/templates/BedgeTemplate';

const BedgePage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 획득한 배지</title>
        <meta name="title" content="빵덕 획득한 배지" />
        <meta name="description" content="빵덕 획득배지, 빵덕을 이용하면서 획득한 방탈출 배지를 확인가능합니다." />
      </Helmet>
      <BedgeTemplate />
    </>
  );
};

export default BedgePage;
