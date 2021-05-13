import React, { ReactElement } from 'react';
import SetupBtn from '../../atoms/SetupBtn';
import * as S from './style';

const MyPageHeader = (): ReactElement => {
  return (
    <S.Header>
      <S.H1Tag>마이페이지</S.H1Tag>
      <SetupBtn />
    </S.Header>
  );
};

export default MyPageHeader;
