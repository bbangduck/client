import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import UpdateCenter from '../../organisms/UpdateCenter';

const UpdateTemplate = (): ReactElement => {
  return (
    <div>
      <UpdateHeader content="설정" />
      <UpdateCenter />
      <p>모큘러스</p>
    </div>
  );
};

export default UpdateTemplate;
