import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import LoginBottom from '../../organisms/LoginBottom';
import userExist from '../../../utils/userExist';
import * as S from './style';

const LoginTemplate = (): ReactElement => {
  if (userExist()) return <Redirect to="/" />;
  return (
    <S.Section>
      <S.Background />
      <S.Container>
        <S.Box>
          <S.Later type="button">다음에 로그인 하기</S.Later>
        </S.Box>
        <S.PTag>
          방탈출카페
          <br />
          테마검색 할 때,
          <br />
          <S.Span>빵덕</S.Span>
        </S.PTag>
        <LoginBottom />
      </S.Container>
    </S.Section>
  );
};

export default LoginTemplate;
