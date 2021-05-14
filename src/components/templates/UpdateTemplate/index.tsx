import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';

const UpdateTemplate = (): ReactElement => {
  return (
    <div>
      <UpdateHeader content="설정" />
      <p>오가니즘</p>
      <p>모큘러스</p>
    </div>
  );
};

export default UpdateTemplate;
