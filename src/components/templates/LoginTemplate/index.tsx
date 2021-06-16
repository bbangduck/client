import React, { ReactElement } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import LoginBottom from '../../organisms/LoginBottom';
import userExist from '../../../utils/userExist';
import * as S from './style';

const LoginTemplate = (): ReactElement => {
  const history = useHistory();

  if (userExist()) return <Redirect to="/" />;
  return (
    <section>
      <S.Background>
        <S.Container>
          <S.Box onClick={() => history.push('/')}>
            <S.Later type="button" data-blink="blink">
              다음에 로그인 하기
            </S.Later>
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
      </S.Background>
    </section>
  );
};

export default LoginTemplate;
