import React, { ReactElement } from 'react';
import Nav from '../../molecules/Nav';
import ThemeNavSwiper from '../../molecules/ThemeNavSwiper';
import ThemesHeader from '../../molecules/ThemesHeader';
import filter from '../../../assets/images/filter/filter.png';
import * as S from './style';
import ThemeList from '../../organisms/ThemeList';
import FilterBtn from '../../atoms/filterBtn';

const ThemeTemplate = (): ReactElement => {
  return (
    <section>
      <ThemesHeader />
      <ThemeNavSwiper />
      <S.FilterBox>
        <S.Span>평점순</S.Span>
        <img src={filter} alt="필터" />
      </S.FilterBox>
      <ThemeList />
      <FilterBtn />
      <Nav />
    </section>
  );
};

export default ThemeTemplate;
