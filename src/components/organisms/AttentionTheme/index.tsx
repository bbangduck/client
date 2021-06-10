import React, { ReactElement } from 'react';
import AttentionThemeItem from '../../molecules/AttentionThemeItem';
import * as S from './style';

const AttentionTheme = (): ReactElement => {
  return (
    <S.Section>
      <S.H2>빵덕이 주목하는 테마</S.H2>
      <S.Ul>
        <AttentionThemeItem />
        <AttentionThemeItem />
        <AttentionThemeItem />
      </S.Ul>
      <S.Btn>더많은 테마 구경하러가기</S.Btn>
    </S.Section>
  );
};

export default AttentionTheme;
