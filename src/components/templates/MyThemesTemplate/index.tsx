import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import MyThemesList from '../../organisms/MyThemesList';

const MyThemeTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader arrow={left} content="관심테마" />
      <MyThemesList />
    </section>
  );
};

export default MyThemeTemplate;
