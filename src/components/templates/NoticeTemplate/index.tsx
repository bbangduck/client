import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import NoticeList from '../../organisms/NoticeList';
import left from '../../../assets/images/arrow/left.png';

const NoticeTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader content="공지사항" arrow={left} />
      <NoticeList />
    </section>
  );
};

export default NoticeTemplate;
