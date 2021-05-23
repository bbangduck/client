import React, { ReactElement, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import BottomBtn from '../../atoms/BottomBtn';
import UpdateHeader from '../../molecules/UpdateHeader';
import LoginClauseCheck from '../../organisms/LoginClauseCheck';
import left from '../../../assets/images/arrow/left.png';
import * as S from './style';

const LoginClauseTemplate = (): ReactElement => {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);

  const onAgree = () => {
    if (localStorage.getItem('accessToken') && isChecked) {
      history.push('/');
    }
  };

  if (!localStorage.getItem('accessToken')) return <Redirect to="/login" />;
  return (
    <S.Section>
      <UpdateHeader arrow={left} />
      <LoginClauseCheck setIsChecked={setIsChecked} isChecked={isChecked} />
      <BottomBtn content="다음" onClick={onAgree} />
    </S.Section>
  );
};

export default LoginClauseTemplate;
