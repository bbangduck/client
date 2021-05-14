import React, { ReactElement } from 'react';
import InputList from '../../atoms/InputList';
import * as S from './style';

const RemoveContent = (): ReactElement => {
  return (
    <div>
      <S.H2>
        빵덕을
        <br />
        <S.Span>탈퇴</S.Span> 하시나요?
      </S.H2>
      <S.P>탈퇴하시는 이유를 알려주세요</S.P>
      <InputList title="선택해주세요" />
    </div>
  );
};

export default RemoveContent;
