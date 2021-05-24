import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import ClauseContent from '../../organisms/ClauseContent';
import left from '../../../assets/images/arrow/left.png';
import userCheck from '../../../utils/userCheck';

const ClauseTemplate = (): ReactElement => {
  if (!userCheck()) return <Redirect to="/" />;
  return (
    <section>
      <UpdateHeader arrow={left} />
      <ClauseContent />
    </section>
  );
};

export default ClauseTemplate;
