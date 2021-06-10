import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateProfileImg from '../../molecules/UpdateProfileImg';
import UpdateHeader from '../../molecules/UpdateHeader';
import ProfileList from '../../organisms/ProfileList';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';

const ProfileTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader content="프로필 설정" arrow={left} />
      <UpdateProfileImg />
      <ProfileList />
    </section>
  );
};

export default ProfileTemplate;
