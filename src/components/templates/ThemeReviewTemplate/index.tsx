import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import ReviewDetailInfo from '../../molecules/ReviewDetailInfo';
import ReviewCheckList from '../../molecules/ReviewCheckList';
import useGetUserData from '../../../swr/useGetUserData';
import userExist from '../../../utils/userExist';

const ThemeReviewTemplate = (): ReactElement => {
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <div style={{ padding: '0 20px' }}>
        <UpdateHeader arrow={left} content="리뷰 작성" />
      </div>
      <ReviewDetailInfo />
      <ReviewCheckList />
    </section>
  );
};

export default ThemeReviewTemplate;
