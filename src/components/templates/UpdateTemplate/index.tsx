import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateFooter from '../../molecules/UpdateFooter';
import UpdateHeader from '../../molecules/UpdateHeader';
import UpdateCenter from '../../organisms/UpdateCenter';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';

const UpdateTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader content="설정" arrow={left} />
      <UpdateCenter />
      <UpdateFooter />
    </section>
  );
};

export default UpdateTemplate;
