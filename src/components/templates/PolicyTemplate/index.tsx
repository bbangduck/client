import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import PolicyContent from '../../organisms/PolicyContent';

const PolicyTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader />
      <PolicyContent />
    </section>
  );
};

export default PolicyTemplate;
