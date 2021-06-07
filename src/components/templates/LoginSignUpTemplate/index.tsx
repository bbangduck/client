import React, { ReactElement, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schemaEmail } from '../../../utils/signUpValidation';
import setSessionStorage from '../../../utils/setSessionStorage';
import userExist from '../../../utils/userExist';

const LoginSignUpTemplate = (): ReactElement => {
  const location = useLocation<KakaoLoginInfoType | null>();
  const history = useHistory();
  const { state } = location;
  const userEmail = state?.socialInfo?.email;
  const userNickname = state?.socialInfo?.nickname;
  const userSocialType = state?.socialInfo?.socialType;
  const userSocialId = state?.socialInfo?.socialId;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataType>({ resolver: yupResolver(schemaEmail) });

  // 카카오로그인시 받은정보 화면에 출력
  useEffect(() => {
    const emailElement: HTMLInputElement | null = document.querySelector('#signUpEmail');
    const nicknameElement: HTMLInputElement | null = document.querySelector('#signUpNickname');

    if (emailElement && userEmail) {
      emailElement.value = userEmail;
      emailElement.focus();
      emailElement.blur();
    }
    if (nicknameElement && userNickname) {
      nicknameElement.value = userNickname;
      nicknameElement.focus();
      nicknameElement.blur();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signUp = async (
    baseURL: string,
    data: {
      email: string;
      nickname: string;
      socialType: string | undefined;
      socialId: string | undefined;
    },
  ) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${baseURL}/api/auth/social/sign-up`,
        data,
      });

      const userId = response.data.data.memberInfo.memberId;
      const accessTokens = response.data.data.tokenInfo.accessToken;
      const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;
      const { refreshToken } = response.data.data.tokenInfo;

      if (response.data.status === 2201) {
        if (accessToken && refreshToken) {
          setSessionStorage(accessToken, refreshToken, userId);
          // 회원가입 성공후 다음페이지로 이동
          history.push('/');
        }
      }
    } catch (e) {
      if (e.response.data.status === 2404) {
        alert('닉네임이 존재합니다');
        // 닉네임 중복
      } else if (e.response.data.status === 2403) {
        console.log(e.response);
        alert('이메일이 존재합니다');
        // 이메일 중복
      } else if (e.response.data.status === 2405) {
        alert('카카오톡 회원이아닙니다');
        // 소셜회원이 아님
      } else {
        history.push('/error');
      }
    }
  };

  const onSignUp = (datas: SignUpDataType) => {
    const data = { email: datas.email, nickname: datas.nickname, socialType: userSocialType, socialId: userSocialId };
    const baseURL = process.env.REACT_APP_URL;

    if (baseURL) signUp(baseURL, data);
  };

  if (userExist()) return <Redirect to="/" />;
  if (!state?.socialInfo) return <Redirect to="/login" />;
  return (
    <form onSubmit={handleSubmit(onSignUp)}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input type="text" placeholder="email" {...register('email')} name="email" id="signUpEmail" />
      {errors.email ? <span>{errors.email.message}</span> : null}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input type="text" placeholder="nickname" {...register('nickname')} name="nickname" id="signUpNickname" />
      {errors.nickname ? <span>{errors.nickname.message}</span> : null}
      <button type="submit">회원가입</button>
    </form>
  );
};

export default LoginSignUpTemplate;
