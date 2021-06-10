import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import ClauseContent from '../../organisms/ClauseContent';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';

const ClauseTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} />
      <ClauseContent />
    </section>
  );
};

export default ClauseTemplate;
