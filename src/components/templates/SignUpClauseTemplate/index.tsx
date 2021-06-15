import React, { ReactElement, useState } from 'react';
import { useHistory, Redirect, useLocation } from 'react-router-dom';
import BottomBtn from '../../atoms/BottomBtn';
import UpdateHeader from '../../molecules/UpdateHeader';
import SignUpClauseCheck from '../../organisms/SignUpClauseCheck';
import left from '../../../assets/images/arrow/left.png';
import * as S from './style';
import userExist from '../../../utils/userExist';

const SignUpClauseTemplate = (): ReactElement => {
  const location = useLocation<KakaoLoginInfoType>();
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const socialInfo = location.state;

  const pushNextPage = () => {
    history.push({
      pathname: '/signup/email',
      state: socialInfo,
    });
  };

  const onAgree = () => {
    if (isChecked && socialInfo) {
      pushNextPage();
    }
  };

  if (userExist()) return <Redirect to="/" />;
  if (!socialInfo) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} />
      <SignUpClauseCheck setIsChecked={setIsChecked} isChecked={isChecked} />
      <S.BtnBox>
        <BottomBtn content="다음" onClick={onAgree} />
      </S.BtnBox>
    </section>
  );
};

export default SignUpClauseTemplate;
