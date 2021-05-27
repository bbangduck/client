import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import MyStatusList from '../../organisms/MyStatusList';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';

const StatusTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/" />;
  return (
    <section>
      <UpdateHeader content="내 방탈출" arrow={left} />
      <MyStatusList />
    </section>
  );
};

export default StatusTemplate;
