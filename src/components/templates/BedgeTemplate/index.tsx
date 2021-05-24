import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import BadgeList from '../../organisms/BedgeList';
import left from '../../../assets/images/arrow/left.png';
import userCheck from '../../../utils/userCheck';

const BedgeTemplate = (): ReactElement => {
  if (!userCheck()) return <Redirect to="/" />;
  return (
    <section>
      <UpdateHeader content="획득 배지" arrow={left} />
      <BadgeList />
    </section>
  );
};

export default BedgeTemplate;
