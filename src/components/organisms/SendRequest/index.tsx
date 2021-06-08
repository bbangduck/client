import React, { ReactElement, useState } from 'react';
import RequestNumber from '../../molecules/RequestNumber';
import SendRequestList from '../SendRequestList';

const SendRequest = (): ReactElement => {
  const [isShow, setIsShow] = useState(true);

  const onShowClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div>
      <RequestNumber title="보낸 신청" number={4} onShowClick={onShowClick} isShow={isShow} />
      {isShow ? <SendRequestList /> : null}
    </div>
  );
};

export default SendRequest;
