import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import MyThemesList from '../../organisms/MyThemesList';
import userExist from '../../../utils/userExist';

const MyThemeTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} content="관심테마" />
      <MyThemesList />
    </section>
  );
};

export default MyThemeTemplate;
