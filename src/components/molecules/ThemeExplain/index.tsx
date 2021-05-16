import React, { ReactElement } from 'react';
import MyPageSubTitle from '../MyPageSubTitle';
import * as S from './style';

const ThemeExplain = (): ReactElement => {
  return (
    <S.Section>
      <MyPageSubTitle content="테마 설명" />
      <S.PTag>나는 국민여배우 톱스타 홍설아와 비밀 연애중이다.</S.PTag>
    </S.Section>
  );
};

export default ThemeExplain;
