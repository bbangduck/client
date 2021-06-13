import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import ThemeSearchFriendTemplate from '../../components/templates/ThemeSearchFriendTemplate';

const ThemeSearchFriendPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 친구 선택</title>
        <meta name="title" content="빵덕 테마친구선택" />
        <meta name="description" content="빵덕 방탈출을 함께한 친구를 선택하세요." />
      </Helmet>
      <ThemeSearchFriendTemplate />
    </>
  );
};

export default ThemeSearchFriendPage;
