import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import userExist from '../../../utils/userExist';
import MyTendencyTitle from '../../molecules/MyTendencyTitle';
import TendencyIntro from '../../organisms/TendencyIntro';

const MyTendencyTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/" />;
  return (
    <section>
      <MyTendencyTitle />
      <TendencyIntro />
    </section>
  );
};

export default MyTendencyTemplate;
