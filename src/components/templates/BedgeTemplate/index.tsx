import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import BadgeList from '../../organisms/BedgeList';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';
import useGetUserData from '../../../swr/useGetUserData';
import * as S from './style';

const BedgeTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <S.Box>
        <UpdateHeader content="획득 배지" arrow={left} />
      </S.Box>
      <BadgeList />
    </section>
  );
};

export default BedgeTemplate;
