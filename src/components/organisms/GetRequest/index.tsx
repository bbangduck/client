import React, { ReactElement, useState } from 'react';
import RequestNumber from '../../molecules/RequestNumber';
import GetRequestList from '../GetRequestList';

const GetRequest = (): ReactElement => {
  const [isShow, setIsShow] = useState(true);

  const onShowClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div>
      <RequestNumber title="받은 신청" number={4} onShowClick={onShowClick} isShow={isShow} />
      {isShow ? <GetRequestList /> : null}
    </div>
  );
};

export default GetRequest;
