import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateProfileImg from '../../molecules/UpdateProfileImg';
import UpdateHeader from '../../molecules/UpdateHeader';
import ProfileList from '../../organisms/ProfileList';
import left from '../../../assets/images/arrow/left.png';
import userCheck from '../../../utils/userCheck';

const ProfileTemplate = (): ReactElement => {
  if (!userCheck()) return <Redirect to="/" />;
  return (
    <section>
      <UpdateHeader content="프로필 설정" arrow={left} />
      <UpdateProfileImg />
      <ProfileList />
    </section>
  );
};

export default ProfileTemplate;
