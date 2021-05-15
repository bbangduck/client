import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import PolicyContent from '../../organisms/PolicyContent';
import left from '../../../assets/images/arrow/left.png';

const PolicyTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader arrow={left} />
      <PolicyContent />
    </section>
  );
};

export default PolicyTemplate;
