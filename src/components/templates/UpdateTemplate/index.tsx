import React, { ReactElement } from 'react';
import * as S from './style';
import UpdateFooter from '../../molecules/UpdateFooter';
import UpdateHeader from '../../molecules/UpdateHeader';
import UpdateCenter from '../../organisms/UpdateCenter';

const UpdateTemplate = (): ReactElement => {
  return (
    <S.Section>
      <UpdateHeader content="설정" />
      <UpdateCenter />
      <UpdateFooter />
    </S.Section>
  );
};

export default UpdateTemplate;
