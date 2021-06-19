import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import search from '../../../assets/images/search/search.png';
import logo from '../../../assets/images/logo/logoBlack.png';
import * as S from './style';

const MainHeader = (): ReactElement => {
  const history = useHistory();

  return (
    <S.Header>
      <img src={logo} alt="로고" />
      <S.Img src={search} alt="찾기" onClick={() => history.push('/search')} data-blink="blink" />
    </S.Header>
  );
};

export default MainHeader;
