import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateFooter from '../../molecules/UpdateFooter';
import UpdateHeader from '../../molecules/UpdateHeader';
import UpdateCenter from '../../organisms/UpdateCenter';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';
import useGetUserData from '../../../swr/useGetUserData';
import * as S from './style';

const UpdateTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <S.Box>
        <UpdateHeader content="설정" arrow={left} />
      </S.Box>
      <UpdateCenter />
      <UpdateFooter />
    </section>
  );
};

export default UpdateTemplate;
