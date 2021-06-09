import React, { ReactElement } from 'react';
import MainHeader from '../../molecules/MainHeader';
import Nav from '../../molecules/Nav';
import MainNewThemes from '../../organisms/MainNewThemes';
import Picks from '../../organisms/Picks';

const MainTemplate = (): ReactElement => {
  return (
    <section>
      <MainHeader />
      <MainNewThemes />
      <Picks />
      <p>오가니즘</p>
      <p>오가니즘</p>
      <Nav />
    </section>
  );
};

export default MainTemplate;
