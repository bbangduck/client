import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import search from '../../../assets/images/search/search.svg';
import * as S from './style';

const ThemesHeader = (): ReactElement => {
  const history = useHistory();

  return (
    <S.Container>
      <S.PTag>테마</S.PTag>
      <S.Img src={search} alt="검색" onClick={() => history.push('/search')} data-blink="blink" />
    </S.Container>
  );
};

export default ThemesHeader;
