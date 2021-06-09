import React, { ReactElement } from 'react';
import MainHeader from '../../molecules/MainHeader';
import Nav from '../../molecules/Nav';
import MainNewThemes from '../../organisms/MainNewThemes';

const MainTemplate = (): ReactElement => {
  return (
    <section>
      <MainHeader />
      <MainNewThemes />
      <p>오가니즘</p>
      <p>오가니즘</p>
      <p>오가니즘</p>
      <Nav />
    </section>
  );
};

export default MainTemplate;
