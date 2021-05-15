import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import MyStatusList from '../../organisms/MyStatusList';
import left from '../../../assets/images/arrow/left.png';

const StatusTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader content="내 방탈출" arrow={left} />
      <MyStatusList />
    </section>
  );
};

export default StatusTemplate;
