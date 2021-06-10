import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import PolicyContent from '../../organisms/PolicyContent';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';

const PolicyTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} />
      <PolicyContent />
    </section>
  );
};

export default PolicyTemplate;
