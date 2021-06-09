import React, { ReactElement } from 'react';
import MainHeader from '../../molecules/MainHeader';
import Nav from '../../molecules/Nav';
import AttentionTheme from '../../organisms/AttentionTheme';
import MainNewThemes from '../../organisms/MainNewThemes';
import Picks from '../../organisms/Picks';

const MainTemplate = (): ReactElement => {
  return (
    <section>
      <MainHeader />
      <MainNewThemes />
      <Picks />
      <AttentionTheme />
      <p>오가니즘</p>
      <Nav />
    </section>
  );
};

export default MainTemplate;
