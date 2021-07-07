import React, { ReactElement } from 'react';
import ThumbNail from '../../molecules/ThumbNail';
import * as S from './style';
import { useThemeInfinite } from '../../../swr/useThemeInfinite';
import useLastThemeObserver from '../../../hooks/useLastThemeObserver';

const ThemeList = (): ReactElement => {
  const { data: themeList, setSize } = useThemeInfinite();
  const [lastRef] = useLastThemeObserver(setSize);

  return (
    <S.Ul>
      {themeList?.map((list, index) => {
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
