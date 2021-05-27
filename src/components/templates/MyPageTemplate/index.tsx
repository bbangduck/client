import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import userExist from '../../../utils/userExist';
import EscapeNotices from '../../molecules/EscapeNotice';
import MyPageHeader from '../../molecules/MyPageHeader';
import Nav from '../../molecules/Nav';
import AboutMe from '../../organisms/AboutMe';
import EscapeBadges from '../../organisms/EscapeBadges';
import EscapeStatus from '../../organisms/EscapeStatus';
import EscapeTendency from '../../organisms/EscapeTendency';
import EscapeThemes from '../../organisms/EscapeThemes';
import * as S from './style';

const MyPageTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/" />;
  return (
    <S.Container>
      <MyPageHeader />
      <AboutMe />
      <EscapeStatus />
      <EscapeTendency />
      <EscapeBadges />
      <EscapeThemes />
      <EscapeNotices />
      <Nav />
    </S.Container>
  );
};

export default MyPageTemplate;
