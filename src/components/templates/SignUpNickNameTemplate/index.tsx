import React, { ReactElement } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import * as S from './style';
import SignUpLastForm from '../../organisms/SignUpLastForm';
import userExist from '../../../utils/userExist';

const SignUpNickNameTemplate = (): ReactElement => {
  const location = useLocation<KakaoLoginInfoType>();
  const userData = location?.state;

  if (userExist()) return <Redirect to="/" />;
  if (!userData) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} />
      <S.H1>
        빵덕에서 사용할
        <br />
        닉네임을 입력해주세요.
      </S.H1>
      <SignUpLastForm userData={userData} />
    </section>
  );
};

export default SignUpNickNameTemplate;
