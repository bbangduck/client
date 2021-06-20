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
      <S.BtnBox>
        <S.Btn data-blink="blink">더많은 테마 구경하러가기</S.Btn>
      </S.BtnBox>
    </S.Section>
  );
};

export default AttentionTheme;
