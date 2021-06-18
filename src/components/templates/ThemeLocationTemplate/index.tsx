import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import useGetUserData from '../../../swr/useGetUserData';
import userExist from '../../../utils/userExist';

const ThemeLocationTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <div>
      <p>테마상세 지도입니다.</p>
    </div>
  );
};

export default ThemeLocationTemplate;
