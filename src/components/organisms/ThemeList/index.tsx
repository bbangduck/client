import React, { ReactElement } from 'react';
import ThumbNail from '../../molecules/ThumbNail';
import * as S from './style';

const ThemeList = (): ReactElement => {
  return (
    <S.Ul>
      <ThumbNail />
      <ThumbNail />
      <ThumbNail />
      <ThumbNail />
      <ThumbNail />
      <ThumbNail />
      <ThumbNail />
    </S.Ul>
  );
};

export default ThemeList;
