import React, { ReactElement } from 'react';
import search from '../../../assets/images/search/search.png';
import * as S from './style';

const MainHeader = (): ReactElement => {
  return (
    <S.Header>
      <p>빵덕</p>
      <S.Img src={search} alt="찾기" />
    </S.Header>
  );
};

export default MainHeader;
