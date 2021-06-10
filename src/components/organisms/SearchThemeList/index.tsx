import React, { ReactElement } from 'react';
import ThumbNail from '../../molecules/ThumbNail';
import * as S from './style';

const SearchThemeList = (): ReactElement => {
  return (
    <article>
      <S.PTag>테마</S.PTag>
      <S.Ul>
        <ThumbNail />
        <ThumbNail />
      </S.Ul>
    </article>
  );
};

export default SearchThemeList;
