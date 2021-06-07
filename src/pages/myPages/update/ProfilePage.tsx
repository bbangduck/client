import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import ProfileTemplate from '../../../components/templates/ProfileTemplate';

const ProfilePage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 프로필설정</title>
        <meta name="title" content="빵덕 프로필설정" />
        <meta
          name="description"
          content="빵덕 마이페이지 프로필설정에서는 사진,닉네임,자기소개,방탈출 기록공개 수정이 가능합니다."
        />
      </Helmet>
      <ProfileTemplate />
    </>
  );
};

export default ProfilePage;
