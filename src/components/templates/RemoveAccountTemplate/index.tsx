import React, { ReactElement } from 'react';
import BottomBtn from '../../atoms/BottomBtn';
import RemoveContent from '../../molecules/RemoveContent';
import UpdateHeader from '../../molecules/UpdateHeader';
import * as S from './style';

const RemoveAccountTemplate = (): ReactElement => {
  return (
    <S.Container>
      <UpdateHeader content="회원탈퇴" />
      <RemoveContent />
      <BottomBtn content="다음" onClick={() => console.log(1)} />
    </S.Container>
  );
};

export default RemoveAccountTemplate;
