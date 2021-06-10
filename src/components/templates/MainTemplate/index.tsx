import React, { ReactElement } from 'react';
import MainHeader from '../../molecules/MainHeader';
import Nav from '../../molecules/Nav';
import AttentionTheme from '../../organisms/AttentionTheme';
import MainNewThemes from '../../organisms/MainNewThemes';
import Picks from '../../organisms/Picks';
import ThemeWithReview from '../../organisms/ThemeWithReview';

const MainTemplate = (): ReactElement => {
  return (
    <section>
      <MainHeader />
      <MainNewThemes />
      <Picks />
      <AttentionTheme />
      <ThemeWithReview />
      <Nav />
    </section>
  );
};

export default MainTemplate;
