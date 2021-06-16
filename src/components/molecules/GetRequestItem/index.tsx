import React, { ReactElement } from 'react';
import UserData from '../UserData';
import * as S from './style';

const GetRequestItem = (): ReactElement => {
  return (
    <S.Li>
      <UserData marginBottom={2} />
      <S.Box>
        <S.Left data-blink="blink">거절</S.Left>
        <S.Right data-blink="blink">수락</S.Right>
      </S.Box>
    </S.Li>
  );
};

export default GetRequestItem;
