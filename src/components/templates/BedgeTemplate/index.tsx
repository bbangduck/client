import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import BadgeList from '../../organisms/BedgeList';
import left from '../../../assets/images/arrow/left.png';

const BedgeTemplate = (): ReactElement => {
  return (
    <section>
      <UpdateHeader content="획득 배지" arrow={left} />
      <BadgeList />
    </section>
  );
};

export default BedgeTemplate;
