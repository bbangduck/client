import React, { ReactElement } from 'react';
import ProfileImg from '../../molecules/ProfileImg';
import UpdateHeader from '../../molecules/UpdateHeader';
import ProfileList from '../../organisms/ProfileList';

const ProfileTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader content="프로필 설정" />
      <ProfileImg />
      <ProfileList />
    </section>
  );
};

export default ProfileTemplate;
