import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './style';
import UpdateFooter from '../../molecules/UpdateFooter';
import UpdateHeader from '../../molecules/UpdateHeader';
import UpdateCenter from '../../organisms/UpdateCenter';
import left from '../../../assets/images/arrow/left.png';
import userCheck from '../../../utils/userCheck';

const UpdateTemplate = (): ReactElement => {
  if (!userCheck()) return <Redirect to="/" />;
  return (
    <S.Section>
      <UpdateHeader content="설정" arrow={left} />
      <UpdateCenter />
      <UpdateFooter />
    </S.Section>
  );
};

export default UpdateTemplate;
