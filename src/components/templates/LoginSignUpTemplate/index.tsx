import React, { ReactElement } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { axiosAPI } from '../../../utils/axios';

const LoginSignUpTemplate = (): ReactElement => {
  const location = useLocation<KakaoLoginInfoType | null>();
  const history = useHistory();
  const { state } = location;

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await axiosAPI({
      method: 'post',
      url: `/api/auth/social/sign-up`,
      data: state?.userInfo,
    });

    const { accessToken } = await response.data.tokenInfo;

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      history.push('/login/clause');
    }
  };

  if (!state?.userInfo) history.push('/login');
  return (
    <form onSubmit={onSignUp}>
      <input type="email" placeholder="email" />
      <input type="text" placeholder="nickname" />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default LoginSignUpTemplate;
