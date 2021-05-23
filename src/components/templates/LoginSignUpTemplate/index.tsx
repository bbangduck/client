import React, { ReactElement, useRef, useEffect } from 'react';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { axiosAPI } from '../../../utils/axios';
import schema from '../../../utils/signUpValidation';

const LoginSignUpTemplate = (): ReactElement => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nicknameRef = useRef<HTMLInputElement | null>(null);
  const location = useLocation<KakaoLoginInfoType | null>();
  const history = useHistory();
  const { state } = location;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataType>({ resolver: yupResolver(schema) });

  useEffect(() => {
    const emailElement: HTMLInputElement | null = document.querySelector('#signUpEmail');
    const nicknameElement: HTMLInputElement | null = document.querySelector('#signUpNickname');

    if (emailElement) emailElement.value = '소셜로그인 이메일주소';
    if (nicknameElement) nicknameElement.value = '소셜로그인 닉네임';
    // if (emailRef.current && state) {
    //   const userEmail = state.userInfo.email;
    //   emailRef.current.value = userEmail;
    // }
    // else if (nicknameRef.current && state) {
    //   const userNickname = state.userInfo.email;
    //   nicknameRef.current.value = userNickname;
    // }
  }, []);

  if (errors) console.log(errors);
  const onSignUp = (data: SignUpDataType) => {
    if (data) console.log(data);

    // try {
    //   const response = await axiosAPI({
    //     method: 'post',
    //     url: `/api/auth/social/sign-up`,
    //     data: state?.userInfo,
    //   });

    //   const { accessToken } = await response.data.tokenInfo;

    //   if (accessToken) {
    //     localStorage.setItem('bbangAT', accessToken);
    //     history.push({
    //       pathname: '/login/clause',
    //     });
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };

  // if (!state?.userInfo) return <Redirect to="/login" />;
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
