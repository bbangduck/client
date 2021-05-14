import React, { ReactElement } from 'react';
import ProfileImg from '../../molecules/ProfileImg';
import UpdateHeader from '../../molecules/UpdateHeader';
import UpdateList from '../../organisms/ProfileList';

const ProfileTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader content="프로필 설정" />
      <ProfileImg />
      <UpdateList />
    </section>
  );
};

export default ProfileTemplate;
