import React, { ReactElement } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import userExist from '../../../utils/userExist';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.svg';
import * as S from './style';
import SignUpEmailForm from '../../organisms/SignUpEmailForm';

const SignUpEmailTemplate = (): ReactElement => {
  const location = useLocation<KakaoLoginInfoType>();
  const userData = location?.state;

  if (userExist()) return <Redirect to="/" />;
  if (!userData) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} />
      <S.H1>
        이메일 주소를
        <br />
        입력해주세요.
      </S.H1>
      <SignUpEmailForm userData={userData} />
    </section>
  );
};

export default SignUpEmailTemplate;
