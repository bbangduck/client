import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import NoticeList from '../../organisms/NoticeList';
import left from '../../../assets/images/arrow/left.png';
import userCheck from '../../../utils/userCheck';

const NoticeTemplate = (): ReactElement => {
  if (!userCheck()) return <Redirect to="/" />;
  return (
    <section>
      <UpdateHeader content="공지사항" arrow={left} />
      <NoticeList />
    </section>
  );
};

export default NoticeTemplate;
