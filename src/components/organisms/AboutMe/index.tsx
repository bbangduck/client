import React, { ReactElement } from 'react';
import Intro from '../../atoms/Intro';
import MyInfo from '../../molecules/MyInfo';
import * as S from './style';

const AboutMe = (): ReactElement => {
  return (
    <S.Section>
      <MyInfo />
      <Intro />
    </S.Section>
  );
};

export default AboutMe;
