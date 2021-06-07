import React, { ReactElement } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import userExist from '../../../utils/userExist';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import * as S from './style';
import SignUpEmailForm from '../../organisms/SignUpEmailForm';

const SignUpEmailTemplate = (): ReactElement => {
  const location = useLocation<KakaoLoginInfoType>();
  const {
    socialInfo: { socialId, socialType },
  } = location?.state;
  const userData = { socialType, socialId };

  if (userExist()) return <Redirect to="/" />;
  if (!socialId && !socialType) return <Redirect to="/login" />;
  return (
    <S.Section>
      <UpdateHeader arrow={left} />
      <S.H1>
        이메일 주소를
        <br />
        입력해주세요.
      </S.H1>
      <SignUpEmailForm userData={userData} />
    </S.Section>
  );
};

export default SignUpEmailTemplate;
