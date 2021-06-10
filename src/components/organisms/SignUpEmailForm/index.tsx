/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const [isError, setIsError] = useState(false);

  const onInputhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onDelete = () => {
    setInputValue('');
  };

  const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRegex.test(inputValue)) {
      setIsError(false);
      const newUserData = { ...userData, email: inputValue, nickname: '' };
      history.push({
        pathname: '/signup/nickname',
        state: newUserData,
      });
    } else {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={onSignUp}>
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
      {isError ? <S.ErrorMsg>올바르지 않은 이메일주소 입니다.</S.ErrorMsg> : null}
      <BottomBtn content="다음" />
    </form>
  );
};

export default SignUpEmailForm;
