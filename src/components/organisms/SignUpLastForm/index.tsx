import React, { ReactElement, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import BottomBtn from '../../atoms/BottomBtn';
import setSessionStorage from '../../../utils/setSessionStorage';
import * as S from './style';
import usePopAlarm from '../../../hooks/usePopAlarm';
import greenCheck from '../../../assets/images/check/greenCheck.png';

interface Props {
  userData: KakaoLoginInfoType;
}
const SignUpLastForm = ({ userData }: Props): ReactElement => {
  const history = useHistory();
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setsuccessMessage] = useState('');
  const [showPopAlarm] = usePopAlarm();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setsuccessMessage('');
    setInputValue(e.target.value);
  };

  const onCheckNickname = async () => {
    try {
      if (!inputValue) {
        setsuccessMessage('');
        setErrorMessage('닉네입을 입력해주세요.');
      } else {
        const response = await axios({
          method: 'post',
          url: `${process.env.REACT_APP_URL}/api/auth/nicknames/check-availabilities`,
          data: {
            nickname: inputValue,
          },
        });
        const result = response.data;
        if (!result) {
          setsuccessMessage('');
          setErrorMessage('이미 사용중입니다.');
        } else {
          setErrorMessage('');
          setsuccessMessage('사용 가능한 닉네임 입니다.');
        }
      }
    } catch (error) {
      history.push('/error');
    }
  };

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const baseURL = process.env.REACT_APP_URL;
    const data = { ...userData, nickname: inputValue };

    if (!inputValue) {
      // 작성을 안했다면..?
      setsuccessMessage('');
      setErrorMessage('닉네입을 입력해주세요.');
    } else if (!successMessage) {
      // 중복체크를 안했다면..?
      setsuccessMessage('');
      setErrorMessage('중복체크를 실행해주세요.');
    } else {
      try {
        const response = await axios({
          method: 'post',
          url: `${baseURL}/api/auth/social/sign-up`,
          data,
        });
        const userId = response.data.memberInfo.memberId;
        const accessTokens = response.data.tokenInfo.accessToken;
        const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;
        const { refreshToken } = response.data.tokenInfo;

        if (response) {
          if (accessToken && refreshToken) {
            setSessionStorage(accessToken, refreshToken, userId);
            history.push('/');
            showPopAlarm('회원가입에 성공하였습니다.');
          }
        }
      } catch (error) {
        if (error.response.data.status === 2404) {
          setsuccessMessage('');
          setErrorMessage('닉네임이 존재합니다');
        } else if (error.response.data.status === 2405) {
          setsuccessMessage('');
          setErrorMessage('해당 소셜 회원은 이미 가입된 회원입니다.');
        } else {
          history.push('/error');
        }
      }
    }
  };

  return (
    <S.Form onSubmit={onSignUp}>
      <S.Label htmlFor="signupEmail">
        <S.Span>닉네임</S.Span>
        <S.InputBox>
          <S.Input
            type="text"
            id="signupEmail"
            placeholder="닉네임 입력"
            name="email"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onChange={onInputChange}
            focus={inputFocus}
            autoComplete="off"
          />
          <S.CheckBtn type="button" onClick={onCheckNickname} data-blink="cover">
            중복체크
          </S.CheckBtn>
        </S.InputBox>
      </S.Label>
      {errorMessage ? <S.ErrorMsg>{errorMessage}</S.ErrorMsg> : null}
      {successMessage ? (
        <S.SuccessMsg>
          <img src={greenCheck} alt="사용가능" /> {successMessage}
        </S.SuccessMsg>
      ) : null}
      <S.BtnBox>
        <BottomBtn content="완료" />
      </S.BtnBox>
    </S.Form>
  );
};

export default SignUpLastForm;
