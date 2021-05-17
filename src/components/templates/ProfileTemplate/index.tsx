import React, { ReactElement } from 'react';
import ProfileImg from '../../molecules/ProfileImg';
import UpdateHeader from '../../molecules/UpdateHeader';
import ProfileList from '../../organisms/ProfileList';
import left from '../../../assets/images/arrow/left.png';

const ProfileTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader content="프로필 설정" arrow={left} />
      <ProfileImg />
      <ProfileList />
    </section>
  );
};

export default ProfileTemplate;
