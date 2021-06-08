import React, { ReactElement } from 'react';
import GetRequestItem from '../../molecules/GetRequestItem';

const GetRequestList = (): ReactElement => {
  return (
    <ul>
      <GetRequestItem />
      <GetRequestItem />
    </ul>
  );
};

export default GetRequestList;
