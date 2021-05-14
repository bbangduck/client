import React, { ReactElement } from 'react';
import RemoveBottom from '../../molecules/RemoveBottom';
import Remove2Content from '../../molecules/RemoveContent2';
import UpdateHeader from '../../molecules/UpdateHeader';
import * as S from './style';

const RemoveAccountTemplate2 = (): ReactElement => {
  return (
    <S.Section>
      <UpdateHeader content="회원탈퇴" />
      <Remove2Content />
      <RemoveBottom />
    </S.Section>
  );
};

export default RemoveAccountTemplate2;
