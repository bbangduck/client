import React, { ReactElement, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import BottomBtn from '../../atoms/BottomBtn';
import * as S from './style';
import setSessionStorage from '../../../utils/setSessionStorage';

interface Props {
  userData: KakaoLoginInfoType;
}
const SignUpLastForm = ({ userData }: Props): ReactElement => {
  const history = useHistory();
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSignUp = async () => {
    const baseURL = process.env.REACT_APP_URL;
    const data = { ...userData, nickname: inputValue };
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
    } catch (error) {
      if (error.response.data.status === 2404) {
        setErrorMessage('닉네임이 존재합니다');
        // 닉네임 중복
      } else {
        history.push('/error');
      }
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <S.Label htmlFor="signupEmail">
        <S.Span>닉네임</S.Span>
        <S.InputBox>
          <S.Input
            type="text"
            id="signupEmail"
            placeholder="이메일 입력"
            name="email"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onChange={(e) => setInputValue(e.target.value)}
            focus={inputFocus}
          />
          <S.CheckBtn type="button">중복체크</S.CheckBtn>
        </S.InputBox>
      </S.Label>
      <S.ErrorMsg>{errorMessage}</S.ErrorMsg>
      <BottomBtn content="완료" onClick={onSignUp} />
    </form>
  );
};

export default SignUpLastForm;
