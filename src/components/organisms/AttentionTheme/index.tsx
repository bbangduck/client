import React, { ReactElement } from 'react';
import AttentionThemeItem from '../../molecules/AttentionThemeItem';
import poster from '../../../assets/images/test/poster.jpg';
import poster2 from '../../../assets/images/test/me.jpg';
import * as S from './style';

const AttentionTheme = (): ReactElement => {
  return (
    <S.Section>
      <S.H2>빵덕이 주목하는 테마</S.H2>
      <S.Ul>
        <AttentionThemeItem image={poster} />
        <AttentionThemeItem image={poster2} />
        <AttentionThemeItem image={poster} />
      </S.Ul>
      <S.BtnBox>
        <S.Btn data-blink="blink">더많은 테마 구경하러가기</S.Btn>
      </S.BtnBox>
    </S.Section>
  );
};

export default AttentionTheme;
