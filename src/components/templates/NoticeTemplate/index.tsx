import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import NoticeList from '../../organisms/NoticeList';

const NoticeTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader content="공지사항" />
      <NoticeList />
    </section>
  );
};

export default NoticeTemplate;
