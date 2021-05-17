import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import NoticeContent from '../../organisms/NoticeContent';
import left from '../../../assets/images/arrow/left.png';

const NoticeTemplate2 = (): ReactElement => {
  return (
    <section>
      <UpdateHeader arrow={left} />
      <NoticeContent />
    </section>
  );
};

export default NoticeTemplate2;
