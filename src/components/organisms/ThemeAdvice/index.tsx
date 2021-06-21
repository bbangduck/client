import React, { ReactElement } from 'react';
import ThemeAdviceItem from '../../molecules/ThemeAdviceItem';
import test from '../../../assets/images/test/poster.jpg';
import test2 from '../../../assets/images/test/me.jpg';
import * as S from './style';

const ThemeAdvice = (): ReactElement => {
  return (
    <S.Aside>
      <S.PTag>빵덕 AI 추천테마</S.PTag>
      <S.Box>
        <ThemeAdviceItem image={test} />
        <ThemeAdviceItem image={test2} />
      </S.Box>
    </S.Aside>
  );
};

export default ThemeAdvice;
