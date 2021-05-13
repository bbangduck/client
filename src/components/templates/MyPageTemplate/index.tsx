import React, { ReactElement } from 'react';
import MyPageHeader from '../../molecules/MyPageHeader';
import AboutMe from '../../organisms/AboutMe';
import EscapeBadges from '../../organisms/EscapeBadges';
import EscapeStatus from '../../organisms/EscapeStatus';
import EscapeTendency from '../../organisms/EscapeTendency';
import EscapeThemes from '../../organisms/EscapeThemes';

const MyPageTemplate = (): ReactElement => {
  return (
    <section>
      <MyPageHeader />
      <AboutMe />
      <EscapeStatus />
      <EscapeTendency />
      <EscapeBadges />
      <EscapeThemes />
      <p>모큘러스</p>
      <p>모큘러스</p>
    </section>
  );
};

export default MyPageTemplate;
