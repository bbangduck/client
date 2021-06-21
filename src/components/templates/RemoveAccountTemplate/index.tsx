import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import RemoveContent from '../../molecules/RemoveContent';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';
import useGetUserData from '../../../swr/useGetUserData';
import * as S from './style';

const RemoveAccountTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <S.Box>
        <UpdateHeader content="회원탈퇴" arrow={left} />
      </S.Box>
      <RemoveContent />
    </section>
  );
};

export default RemoveAccountTemplate;
