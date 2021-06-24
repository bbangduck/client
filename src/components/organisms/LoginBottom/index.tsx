import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import kakao from '../../../assets/images/kakao/kakao.png';
import naver from '../../../assets/images/naver/naver.png';
import setSessionStorage from '../../../utils/setSessionStorage';
import Nav from '../../molecules/Nav';
import * as S from './style';

const LoginBottom = (): ReactElement => {
  const history = useHistory();

  const onKakaoLogin = () => {
    const url = `${process.env.REACT_APP_URL}/api/auth/kakao/sign-in`;
    const name = 'kakao login';
    const option = 'width = 500, height = 500, top = 100, left = 200, location = no';

    const receiveMessage = (event: MessageEvent) => {
      const socialInfo = event.data.data;
      const { status } = event.data;

      if (status === 1421) {
        // 회원이 아닐경우 동의약관페이지로 이동
        history.push({
          pathname: '/signup/clause',
          state: socialInfo,
        });
      } else if (status === 1221) {
        const userId = event.data.data.memberId;
        const accessTokens = event.data.data.accessToken;
        const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;
        const { refreshToken } = event.data.data;
        setSessionStorage(accessToken, refreshToken, userId);
        // 이미가입된 회원일경우 메인화면으로 이동예정
        history.push('/');
      }
    };

    window.open(url, name, option);
    window.addEventListener('message', receiveMessage, false);
  };

  const onNaverLogin = () => {
    // const url = `${process.env.REACT_APP_URL}/api/auth/naver/sign-in`;
    // const name = 'naver login';
    // const option = 'width = 500, height = 500, top = 100, left = 200, location = no';
    // const receiveMessage = (event: MessageEvent) => {
    //   const socialInfo = event.data.data;
    //   const { status } = event.data;
    //   if (status === 1421) {
    //     // 회원이 아닐경우 동의약관페이지로 이동
    //     history.push({
    //       pathname: '/signup/clause',
    //       state: socialInfo,
    //     });
    //   } else if (status === 1221) {
    //     const userId = event.data.data.memberId;
    //     const accessTokens = event.data.data.accessToken;
    //     const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;
    //     const { refreshToken } = event.data.data;
    //     setSessionStorage(accessToken, refreshToken, userId);
    //     // 이미가입된 회원일경우 메인화면으로 이동예정
    //     history.push('/');
    //   }
    // };
    // window.open(url, name, option);
    // window.addEventListener('message', receiveMessage, false);
  };

  return (
    <S.Container>
      <S.BtnBox>
        <S.Btn type="button" onClick={onKakaoLogin} data-blink="cover">
          <img src={kakao} alt="카카오로그인" data-blink="cover" />
          카카오로 계속하기
        </S.Btn>
        <S.Btn2 type="button" onClick={onNaverLogin} data-blink="cover">
          <img src={naver} alt="네이버로그인" data-blink="cover" />
          네이버로 계속하기
        </S.Btn2>
      </S.BtnBox>
      <Nav />
    </S.Container>
  );
};

export default LoginBottom;
