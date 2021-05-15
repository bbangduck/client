import React, { ReactElement } from 'react';
import * as S from './style';

const ThemeNav = (): ReactElement => {
  return (
    <S.Nav>
      <S.Box>
        <S.PTag>테마</S.PTag>
      </S.Box>
      <S.Box>
        <S.PTag>분석</S.PTag>
      </S.Box>
      <S.Box>
        <S.PTag>이벤트</S.PTag>
      </S.Box>
      <S.Box>
        <S.PTag>리뷰</S.PTag>
      </S.Box>
    </S.Nav>
  );
};

export default ThemeNav;
