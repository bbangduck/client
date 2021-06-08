import React, { ReactElement } from 'react';
import UserData from '../UserData';
import * as S from './style';

const SendRequestItem = (): ReactElement => {
  return (
    <S.Li>
      <UserData />
      <S.Box>
        <S.Btn>신청 취소</S.Btn>
      </S.Box>
    </S.Li>
  );
};

export default SendRequestItem;
