import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import ClauseContent from '../../organisms/ClauseContent';
import left from '../../../assets/images/arrow/left.png';

const ClauseTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader arrow={left} />
      <ClauseContent />
    </section>
  );
};

export default ClauseTemplate;
