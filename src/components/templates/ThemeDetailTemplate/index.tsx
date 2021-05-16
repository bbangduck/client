import React, { ReactElement } from 'react';
import ThemeAnalysis from '../../molecules/ThemeAnalysis';
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
      <ThemeAnalysis />
    </section>
  );
};

export default ThemeDetailTemplate;
