import React, { ReactElement, useRef, useEffect } from 'react';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axiosAPI from '../../../utils/axios';
import schema from '../../../utils/signUpValidation';

const LoginSignUpTemplate = (): ReactElement => {
  const location = useLocation<KakaoLoginInfoType | null>();
  const history = useHistory();
  const { state } = location;
  const userEmail = state?.userInfo.email;
  const userNickname = state?.userInfo.nickname;
  const userSocialType = state?.userInfo.socialType;
  const userSocialId = state?.userInfo.socialId;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataType>({ resolver: yupResolver(schema) });

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

  const onSignUp = async (datas: SignUpDataType) => {
    const data = { email: datas.email, nickname: datas.nickname, socialType: userSocialType, socialId: userSocialId };

    // try {
    const response = await axiosAPI({
      method: 'post',
      url: `/api/auth/social/sign-up`,
      data,
    });

    const accessTokens = response.data.data.tokenInfo.accessToken;
    const accessToken = accessTokens.header.concat(accessTokens.payload, accessTokens.signature);
    const { refreshToken } = response.data.data.tokenInfo;
    if (accessToken && refreshToken) {
      localStorage.setItem('bbangAT', accessToken);
      localStorage.setItem('bbangRT', refreshToken);
      // 회원가입 성공후 다음페이지로 이동예정
      // history.push()
    }
    // } catch (err) {
    // console.log(err.name);
    // }
  };

  if (!state?.userInfo) return <Redirect to="/login" />;
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
