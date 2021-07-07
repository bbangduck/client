import React, { ReactElement } from 'react';
import ThumbNail from '../../molecules/ThumbNail';
import * as S from './style';
import { useThemeInfinite } from '../../../swr/useThemeInfinite';
import Loading from '../../atoms/Loading/index';

const ThemeList = (): ReactElement => {
  const { data: themeList, isLoading, lastRef } = useThemeInfinite();

  if (isLoading) return <Loading />;
  return (
    <S.Ul>
      {themeList?.map((list) => {
        const lastId = themeList[themeList?.length - 1].themeId;
        if (list.themeId === lastId) {
          return (
            <ThumbNail
              key={list.themeId}
              image={null}
              title={list.themeName}
              frenchiseName={list.franchiseName}
              shopName={list.shopName}
              lastRef={lastRef}
            />
          );
        }
        return (
          <ThumbNail
            key={list.themeId}
            image={null}
            title={list.themeName}
            frenchiseName={list.franchiseName}
            shopName={list.shopName}
          />
        );
      })}
    </S.Ul>
  );
};

export default ThemeList;
