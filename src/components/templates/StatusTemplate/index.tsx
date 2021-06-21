import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import MyStatusList from '../../organisms/MyStatusList';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';
import useGetUserData from '../../../swr/useGetUserData';
import * as S from './Style';

const StatusTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <S.Section>
      <S.Box>
        <UpdateHeader content="내 방탈출" arrow={left} />
      </S.Box>
      <MyStatusList />
    </S.Section>
  );
};

export default StatusTemplate;
