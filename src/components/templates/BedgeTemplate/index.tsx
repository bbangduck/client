import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import BadgeList from '../../organisms/BedgeList';
import left from '../../../assets/images/arrow/left.png';
import userExist from '../../../utils/userExist';

const BedgeTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/" />;
  return (
    <section>
      <UpdateHeader content="획득 배지" arrow={left} />
      <BadgeList />
    </section>
  );
};

export default BedgeTemplate;
