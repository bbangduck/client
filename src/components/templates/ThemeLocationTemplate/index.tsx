import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import useGetUserData from '../../../swr/useGetUserData';
import userExist from '../../../utils/userExist';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.svg';
import * as S from './style';
import ThemeDetailMap from '../../organisms/ThemeDetailMap';

const ThemeLocationTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <S.HeaderBox>
        <UpdateHeader arrow={left} content="상세 위치" />
      </S.HeaderBox>
      <ThemeDetailMap />
    </section>
  );
};

export default ThemeLocationTemplate;
