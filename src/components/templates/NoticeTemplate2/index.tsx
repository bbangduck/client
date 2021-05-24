import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import NoticeContent from '../../organisms/NoticeContent';
import left from '../../../assets/images/arrow/left.png';
import userCheck from '../../../utils/userCheck';

const NoticeTemplate2 = (): ReactElement => {
  if (!userCheck()) return <Redirect to="/" />;
  return (
    <section>
      <UpdateHeader arrow={left} />
      <NoticeContent />
    </section>
  );
};

export default NoticeTemplate2;
