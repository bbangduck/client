import React, { ReactElement } from 'react';
import ThemeNav from '../../molecules/ThemeNav';
import ThemeHeader from '../../organisms/ThemeHeader';
import * as S from './style';

const ThemeDetailTemplate = (): ReactElement => {
  return (
    <section>
      <ThemeHeader />
      <ThemeNav />
    </section>
  );
};

export default ThemeDetailTemplate;
