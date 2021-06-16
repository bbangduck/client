import React, { ReactElement, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import BottomBtn from '../../atoms/BottomBtn';
import setSessionStorage from '../../../utils/setSessionStorage';
import * as S from './style';
import usePopAlarm from '../../../hooks/usePopAlarm';

interface Props {
  userData: KakaoLoginInfoType;
}
const SignUpLastForm = ({ userData }: Props): ReactElement => {
  const history = useHistory();
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopAlarm] = usePopAlarm();

  const onCheckNickname = () => {
    if (!inputValue) setErrorMessage('닉네입을 입력해주세요.');
    // 중복체크 후 토스트알림
  };

  const onSignUp = async () => {
    const baseURL = process.env.REACT_APP_URL;
    const data = { ...userData, nickname: inputValue };

    if (!inputValue) setErrorMessage('닉네입을 입력해주세요.');
    if (inputValue) {
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
            history.push('/');
            showPopAlarm(true, '회원가입에 성공하였습니다.');
          }
        }
      } catch (error) {
        if (error.response.data.status === 2404) {
          // 닉네임 중복
          setErrorMessage('닉네임이 존재합니다');
        } else {
          history.push('/error');
        }
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
            autoComplete="off"
          />
          <S.CheckBtn type="button" onClick={onCheckNickname} data-blink="blink">
            중복체크
          </S.CheckBtn>
        </S.InputBox>
      </S.Label>
      <S.ErrorMsg>{errorMessage}</S.ErrorMsg>
      <S.BtnBox>
        <BottomBtn content="완료" onClick={onSignUp} />
      </S.BtnBox>
    </form>
  );
};

export default SignUpLastForm;
