import React, { ReactElement } from 'react';
import home from '../../../assets/images/home/home.png';
import book from '../../../assets/images/book/book.png';
import map from '../../../assets/images/map/whiteMap.png';
import human from '../../../assets/images/human/blackHuman.png';
import NavItem from '../../atoms/NavItem/index';
import * as S from './style';

const Nav = (): ReactElement => {
  return (
    <nav>
      <S.Ul>
        <NavItem src={home} name="홈" pushTo="/home" />
        <NavItem src={book} name="테마" />
        <NavItem src={map} name="지도" />
        <NavItem src={human} name="마이페이지" pushTo="/mypage" />
      </S.Ul>
    </nav>
  );
};

export default Nav;
