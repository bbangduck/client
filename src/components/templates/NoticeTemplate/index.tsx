import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import NoticeList from '../../organisms/NoticeList';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';

const NoticeTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader content="공지사항" arrow={left} />
      <NoticeList />
    </section>
  );
};

export default NoticeTemplate;
