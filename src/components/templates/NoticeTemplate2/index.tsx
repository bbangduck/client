import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import NoticeContent from '../../organisms/NoticeContent';

const NoticeTemplate2 = (): ReactElement => {
  return (
    <section>
      <UpdateHeader />
      <NoticeContent />
    </section>
  );
};

export default NoticeTemplate2;
