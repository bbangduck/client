import React, { ReactElement } from 'react';
import GetRequest from '../GetRequest';
import SendRequest from '../SendRequest';

const RequestFriends = (): ReactElement => {
  return (
    <section>
      <GetRequest />
      <SendRequest />
    </section>
  );
};

export default RequestFriends;
