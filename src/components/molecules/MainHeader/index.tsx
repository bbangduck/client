import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import search from '../../../assets/images/search/search.png';
import * as S from './style';

const MainHeader = (): ReactElement => {
  const history = useHistory();

  return (
    <S.Header>
      <p>빵덕</p>
      <S.Img src={search} alt="찾기" onClick={() => history.push('/search')} data-blink="blink" />
    </S.Header>
  );
};

export default MainHeader;
