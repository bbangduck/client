import React, { ReactElement } from 'react';
import ThemeList from '../ThemeList';
import * as S from './style';

const SearchThemeList = (): ReactElement => {
  return (
    <article>
      <S.PTag>테마</S.PTag>
      <ThemeList />
    </article>
  );
};

export default SearchThemeList;
