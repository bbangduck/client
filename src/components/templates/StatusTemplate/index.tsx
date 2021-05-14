import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import MyStatusList from '../../organisms/MyStatusList';

const StatusTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader content="내 방탈출" />
      <MyStatusList />
    </section>
  );
};

export default StatusTemplate;
