import React, { ReactElement } from 'react';
import * as S from './style';

const InputRequest = (): ReactElement => {
  return (
    <S.Container>
      <S.Input type="text" placeholder="닉네임 입력" />
      <S.Btn>친구신청</S.Btn>
    </S.Container>
  );
};

export default InputRequest;
