import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateProfileImg from '../../molecules/UpdateProfileImg';
import UpdateHeader from '../../molecules/UpdateHeader';
import ProfileList from '../../organisms/ProfileList';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';
import useGetUserData from '../../../swr/useGetUserData';
import * as S from './style';

const ProfileTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <S.Box>
        <UpdateHeader content="프로필 설정" arrow={left} />
      </S.Box>
      <UpdateProfileImg />
      <ProfileList />
    </section>
  );
};

export default ProfileTemplate;
