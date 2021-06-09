import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import NoticeContent from '../../organisms/NoticeContent';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';

const NoticeTemplate2 = (): ReactElement => {
  if (!userExist()) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} />
      <NoticeContent />
    </section>
  );
};

export default NoticeTemplate2;
