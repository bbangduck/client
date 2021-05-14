import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import ClauseContent from '../../organisms/ClauseContent';

const ClauseTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader />
      <ClauseContent />
    </section>
  );
};

export default ClauseTemplate;
