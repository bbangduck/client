import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import MyFriendsTemplate from '../../../components/templates/MyFriendsTemplate';

const MyFriendsPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 내 친구</title>
        <meta name="title" content="빵덕 내친구" />
        <meta name="description" content="빵덕 내친구, 방탈출을 함께할 친구를 찾아보세요." />
      </Helmet>
      <MyFriendsTemplate />
    </>
  );
};

export default MyFriendsPage;
