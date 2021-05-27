import React, { ReactElement, useState } from 'react';
import { useHistory, Redirect, useLocation } from 'react-router-dom';
import BottomBtn from '../../atoms/BottomBtn';
import UpdateHeader from '../../molecules/UpdateHeader';
import LoginClauseCheck from '../../organisms/LoginClauseCheck';
import left from '../../../assets/images/arrow/left.png';
import * as S from './style';
import userExist from '../../../utils/userExist';

const LoginClauseTemplate = (): ReactElement => {
  const location = useLocation();
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const userInfo = location.state;

  const onAgree = () => {
    if (isChecked && userInfo) {
      history.push({
        pathname: '/login/signUp',
        state: userInfo,
      });
    }
  };

  if (userExist()) return <Redirect to="/" />;
  if (!userInfo) return <Redirect to="/login" />;
  return (
    <S.Section>
      <UpdateHeader arrow={left} />
      <LoginClauseCheck setIsChecked={setIsChecked} isChecked={isChecked} />
      <BottomBtn content="다음" onClick={onAgree} />
    </S.Section>
  );
};

export default LoginClauseTemplate;
