import React, { ReactElement } from 'react';
import ThemeAnalysis from '../../molecules/ThemeAnalysis';
import ThemeEvent from '../../molecules/ThemeEvent';
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
      <ThemeEvent
        event="[제로호텔 김포], [제로호텔L 강남] 
두 지점 중 한 지점 체험한 경우 50%할인"
      />
    </section>
  );
};

export default ThemeDetailTemplate;
