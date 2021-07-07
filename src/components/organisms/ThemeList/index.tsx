import React, { ReactElement } from 'react';
import ThumbNail from '../../molecules/ThumbNail';
import * as S from './style';
import { useThemeInfinite } from '../../../swr/useThemeInfinite';

const ThemeList = (): ReactElement => {
  const { data: themeList } = useThemeInfinite();
  return (
    <S.Ul>
      {themeList?.map((list) => (
        <ThumbNail
          key={list.themeId}
          image={null}
          title={list.themeName}
          frenchiseName={list.franchiseName}
          shopName={list.shopName}
        />
      ))}
    </S.Ul>
  );
};

export default ThemeList;
