import React, { ReactElement, useState } from 'react';
import BottomBtn from '../../atoms/BottomBtn';
import UpdateHeader from '../../molecules/UpdateHeader';
import LoginClauseCheck from '../../organisms/LoginClauseCheck';
import * as S from './style';

const LoginClauseTemplate = (): ReactElement => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <S.Section>
      <UpdateHeader />
      <LoginClauseCheck setIsChecked={setIsChecked} isChecked={isChecked} />
      <BottomBtn content="다음" onClick={() => console.log('진행중...')} />
    </S.Section>
  );
};

export default LoginClauseTemplate;
