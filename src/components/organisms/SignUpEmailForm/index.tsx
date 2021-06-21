/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import BottomBtn from '../../atoms/BottomBtn';
import deleteIcon from '../../../assets/images/delete/delete.png';
import { emailRegex } from '../../../utils/regex';
import * as S from './style';

interface Props {
  userData: { socialType: string; socialId: string };
}
const SignUpEmailForm = ({ userData }: Props): ReactElement => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [isError, setIsError] = useState('');

  const onInputhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onDelete = () => {
    setInputValue('');
  };

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (emailRegex.test(inputValue)) {
        setIsError('');
        const newUserData = { ...userData, email: inputValue, nickname: '' };
        const response = await axios({
          method: 'post',
          url: `${process.env.REACT_APP_URL}/api/auth/emails/check-availabilities`,
          data: {
            email: inputValue,
          },
        });
        const result = response.data.data;
        if (result) {
          history.push({
            pathname: '/signup/nickname',
            state: newUserData,
          });
        } else {
          setIsError('이미사용중인 이메일입니다.');
        }
      } else {
        setIsError('올바르지 않은 이메일주소 입니다.');
      }
    } catch (error) {
      if (error?.response?.data?.status === 1451) {
        setIsError('올바르지 않은 이메일주소 입니다.');
      } else {
        history.push('/error');
      }
    }
  };

  return (
    <S.Form onSubmit={onSignUp}>
      <S.Label htmlFor="signupEmail">
        <S.Span>이메일</S.Span>
        <S.InputBox>
          <S.Input
            type="text"
            id="signupEmail"
            placeholder="이메일 입력"
            name="email"
            onChange={onInputhange}
            onFocus={() => setInputFocus(true)}
            onBlurCapture={() => setInputFocus(false)}
            value={inputValue}
            focus={inputFocus}
            autoComplete="off"
          />
          {inputValue ? (
            <S.deleteBox onClick={onDelete}>
              <img src={deleteIcon} alt="이메일 삭제" />
            </S.deleteBox>
          ) : null}
        </S.InputBox>
      </S.Label>
      {isError ? <S.ErrorMsg>{isError}</S.ErrorMsg> : null}
      <S.BtnBox>
        <BottomBtn content="다음" />
      </S.BtnBox>
    </S.Form>
  );
};

export default SignUpEmailForm;
