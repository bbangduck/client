import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import MyThemesList from '../../organisms/MyThemesList';
import userExist from '../../../utils/userExist';
import useGetUserData from '../../../swr/useGetUserData';

const MyThemeTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} content="관심테마" />
      <MyThemesList />
    </section>
  );
};

export default MyThemeTemplate;
