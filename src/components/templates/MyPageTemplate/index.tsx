import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import useGetUserData from '../../../swr/useGetUserData';
import userExist from '../../../utils/userExist';
import EscapeNotices from '../../molecules/EscapeNotice';
import MyPageHeader from '../../molecules/MyPageHeader';
import MyPageSubTitle from '../../molecules/MyPageSubTitle';
import Nav from '../../molecules/Nav';
import AboutMe from '../../organisms/AboutMe';
import EscapeBadges from '../../organisms/EscapeBadges';
import EscapeStatus from '../../organisms/EscapeStatus';
import EscapeTendency from '../../organisms/EscapeTendency';
import EscapeThemes from '../../organisms/EscapeThemes';
import * as S from './style';

const MyPageTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <S.Container>
      <MyPageHeader />
      <AboutMe />
      <EscapeStatus />
      <EscapeTendency />
      <EscapeBadges />
      <EscapeThemes />
      <S.Box>
        <MyPageSubTitle content="내 친구" page="/mypage/friends" arrow />
      </S.Box>
      {/* <MyPageSubTitle content="내가 쓴 글" page="/" arrow /> */}
      <EscapeNotices />
      <Nav />
    </S.Container>
  );
};

export default MyPageTemplate;
