import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import PolicyContent from '../../organisms/PolicyContent';
import left from '../../../assets/images/arrow/left.png';
import userCheck from '../../../utils/userCheck';

const PolicyTemplate = (): ReactElement => {
  if (!userCheck()) return <Redirect to="/" />;
  return (
    <section>
      <UpdateHeader arrow={left} />
      <PolicyContent />
    </section>
  );
};

export default PolicyTemplate;
