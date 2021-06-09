import React, { ReactElement } from 'react';
import SearchedList from '../../molecules/SearchedList';
import * as S from './style';

const SearchedSection = (): ReactElement => {
  return (
    <S.Aside>
      <SearchedList title="빵덕 인기 검색어" />
      <SearchedList title="내 최근 검색어" />
    </S.Aside>
  );
};

export default SearchedSection;
