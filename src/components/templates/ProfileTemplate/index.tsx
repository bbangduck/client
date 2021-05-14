import React, { ReactElement } from 'react';
import ProfileImg from '../../molecules/ProfileImg';
import UpdateHeader from '../../molecules/UpdateHeader';

const ProfileTemplate = (): ReactElement => {
  return (
    <div>
      <UpdateHeader content="프로필 설정" />
      <ProfileImg />
      <p>오가니즘</p>
    </div>
  );
};

export default ProfileTemplate;
