import React, { ReactElement } from 'react';
import MyThemeItem from '../../molecules/MyThemeItem';
import * as S from './style';

const MyThemesList = (): ReactElement => {
  return (
    <S.Ul>
      <MyThemeItem />
    </S.Ul>
  );
};

export default MyThemesList;
