import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import kakao from '../../../assets/images/kakao/kakao.png';
import naver from '../../../assets/images/naver/naver.png';
import Nav from '../../molecules/Nav';
import * as S from './style';

const LoginBottom = (): ReactElement => {
  const history = useHistory();

  const naverInit = new window.naver.LoginWithNaverId({
    clientId: '6h_lueMPM6I11Blk3G4M',
    callbackUrl: 'http://localhost:3000/login',
    isPopup: false,
    loginButton: { color: 'green', type: 3, height: 52 },
  });
  const naverLogin = () => {
    naverInit.init();
  };

  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_TOKEN);
    naverLogin();

    if (naverInit.accessToken) {
      console.log(naverInit.accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: 'profile,account_email',
      success: (response: KakaoResType) => {
        console.log(response);
      },
      fail: (err: string) => console.log(err),
    });
  };

  const onNaverLogin = () => {
    console.log(1);
  };

  return (
    <S.Container>
      <S.Btn type="button" onClick={onKakaoLogin}>
        <img src={kakao} alt="카카오로그인" />
        카카오로 계속하기
      </S.Btn>
      <div id="naverIdLogin">
        <S.Btn2 id="naverIdLogin" type="button" onClick={onNaverLogin}>
          <img src={naver} alt="네이버로그인" />
          네이버로 계속하기
        </S.Btn2>
      </div>
      <Nav />
    </S.Container>
  );
};

export default LoginBottom;
