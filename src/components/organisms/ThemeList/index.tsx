import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import ThumbNail from '../../molecules/ThumbNail';
import * as S from './style';
import { useThemeInfinite } from '../../../swr/useThemeInfinite';
import Loading from '../../atoms/Loading/index';
import { AppDispatch, ReducerType } from '../../../stores/rootReducer';

const ThemeList = (): ReactElement => {
  const themeQuery = useSelector<ReducerType, string>((state) => state.themeQuerySlice);

  const { data: themeList, isLoading, lastRef } = useThemeInfinite(themeQuery);

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
