import React, { ReactElement } from 'react';
import ThemeExplain from '../../molecules/ThemeExplain';
import ThemeNav from '../../molecules/ThemeNav';
import ThemeHeader from '../../organisms/ThemeHeader';
import * as S from './style';

const ThemeDetailTemplate = (): ReactElement => {
  return (
    <section>
      <ThemeHeader />
      <ThemeNav />
      <ThemeExplain />
    </section>
  );
};

export default ThemeDetailTemplate;
