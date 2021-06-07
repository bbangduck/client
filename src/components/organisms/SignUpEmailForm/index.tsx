/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import BottomBtn from '../../atoms/BottomBtn';
import { schemaEmail } from '../../../utils/signUpValidation';
import deleteIcon from '../../../assets/images/delete/delete.png';
import * as S from './style';

interface Props {
  userData: { socialType: string; socialId: string };
}
const SignUpEmailForm = ({ userData }: Props): ReactElement => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataType>({ resolver: yupResolver(schemaEmail) });

  const onInputhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(() => e.target.value);
  };

  const onDelete = () => {
    setInputValue(() => '');
  };

  const onSignUp = (datas: { email: string }) => {
    const newUserData = { ...userData, email: datas.email };

    if (newUserData) {
      history.push({
        pathname: '/signup/nickname',
        state: newUserData,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSignUp)}>
      <S.Label htmlFor="signupEmail">
        <S.Span>이메일</S.Span>
        <S.InputBox>
          <S.Input
            type="text"
            id="signupEmail"
            placeholder="이메일 입력"
            {...register('email')}
            name="email"
            onChange={onInputhange}
            onFocus={() => setInputFocus(true)}
            onBlurCapture={() => setInputFocus(false)}
            value={inputValue}
            focus={inputFocus}
          />
          {inputValue ? (
            <S.deleteBox onClick={onDelete}>
              <img src={deleteIcon} alt="이메일 삭제" />
            </S.deleteBox>
          ) : null}
        </S.InputBox>
      </S.Label>
      {errors.email ? <S.ErrorMsg>{errors.email.message}</S.ErrorMsg> : null}
      <BottomBtn content="다음" />
    </form>
  );
};

export default SignUpEmailForm;
