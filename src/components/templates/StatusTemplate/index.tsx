import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import MyStatusList from '../../organisms/MyStatusList';
import left from '../../../assets/images/arrow/left.png';
import userCheck from '../../../utils/userCheck';

const StatusTemplate = (): ReactElement => {
  if (!userCheck()) return <Redirect to="/" />;
  return (
    <section>
      <UpdateHeader content="내 방탈출" arrow={left} />
      <MyStatusList />
    </section>
  );
};

export default StatusTemplate;
