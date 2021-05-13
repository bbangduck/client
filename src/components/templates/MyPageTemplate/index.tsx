import React, { ReactElement } from 'react';
import MyPageHeader from '../../molecules/MyPageHeader';
import AboutMe from '../../organisms/AboutMe';
import EscapeStatus from '../../organisms/EscapeStatus';

const MyPageTemplate = (): ReactElement => {
  return (
    <section>
      <MyPageHeader />
      <AboutMe />
      <EscapeStatus />
      <p>올가니즘3</p>
      <p>올가니즘4</p>
      <p>올가니즘5</p>
      <p>모큘러스</p>
      <p>모큘러스</p>
    </section>
  );
};

export default MyPageTemplate;
