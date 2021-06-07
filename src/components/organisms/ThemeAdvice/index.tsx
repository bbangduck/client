import React, { ReactElement } from 'react';
import ThemeAdviceItem from '../../molecules/ThemeAdviceItem';
import * as S from './style';

const ThemeAdvice = (): ReactElement => {
  return (
    <S.Aside>
      <S.PTag>빵덕 AI 추천테마</S.PTag>
      <S.Box>
        <ThemeAdviceItem />
        <ThemeAdviceItem />
      </S.Box>
    </S.Aside>
  );
};

export default ThemeAdvice;
