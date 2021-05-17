import React, { ReactElement } from 'react';
import * as S from './style';
import UpdateFooter from '../../molecules/UpdateFooter';
import UpdateHeader from '../../molecules/UpdateHeader';
import UpdateCenter from '../../organisms/UpdateCenter';
import left from '../../../assets/images/arrow/left.png';

const UpdateTemplate = (): ReactElement => {
  return (
    <S.Section>
      <UpdateHeader content="설정" arrow={left} />
      <UpdateCenter />
      <UpdateFooter />
    </S.Section>
  );
};

export default UpdateTemplate;
