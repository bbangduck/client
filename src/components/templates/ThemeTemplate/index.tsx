import React, { ReactElement, useState } from 'react';
import Nav from '../../molecules/Nav';
import ThemeNavSwiper from '../../molecules/ThemeNavSwiper';
import ThemesHeader from '../../molecules/ThemesHeader';
import filter from '../../../assets/images/filter/filter.png';
import * as S from './style';
import ThemeList from '../../organisms/ThemeList';
import FilterBtn from '../../atoms/filterBtn';
import FilterSlider from '../../organisms/FilterSlider';
import { useClickOutside } from '../../../hooks/useClickOutside';

const ThemeTemplate = (): ReactElement => {
  const [filterDefault, setFilterDefault] = useState(true);
  const [visibleContentRef, filterOn, setFilterOn, clickOutside] = useClickOutside(false);

  return (
    <section>
      <ThemesHeader />
      <ThemeNavSwiper />
      <S.FilterBox>
        <S.Span>평점순</S.Span>
        <img src={filter} alt="필터" />
      </S.FilterBox>
      <ThemeList />
      <FilterBtn setFilterState={setFilterOn} filterDefault={filterDefault} />
      <Nav />
      <FilterSlider
        visibleContentRef={visibleContentRef}
        setFilterOn={setFilterOn}
        clickOutsideClose={clickOutside}
        filterOn={filterOn}
        setFilterDefault={setFilterDefault}
      />
    </section>
  );
};

export default ThemeTemplate;
