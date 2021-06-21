import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import ClauseContent from '../../organisms/ClauseContent';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';
import useGetUserData from '../../../swr/useGetUserData';

const ClauseTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section style={{ padding: '0 20px' }}>
      <UpdateHeader arrow={left} />
      <ClauseContent />
    </section>
  );
};

export default ClauseTemplate;
