import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import BadgeList from '../../organisms/BedgeList';

const BedgeTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader content="획득 배지" />
      <BadgeList />
    </section>
  );
};

export default BedgeTemplate;
