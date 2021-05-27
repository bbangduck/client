import React, { ReactElement } from 'react';
import home from '../../../assets/images/home/home.png';
import book from '../../../assets/images/book/book.png';
import map from '../../../assets/images/map/whiteMap.png';
import conversation from '../../../assets/images/conversation/conversation.png';
import human from '../../../assets/images/human/blackHuman.png';
import NavItem from '../../atoms/NavItem/index';
import * as S from './style';

const Nav = (): ReactElement => {
  return (
    <nav>
      <S.Container>
        <NavItem src={home} name="홈" />
        <NavItem src={book} name="테마" />
        <NavItem src={map} name="지도" />
        <NavItem src={conversation} name="커뮤니티" />
        <NavItem src={human} name="마이페이지" />
      </S.Container>
    </nav>
  );
};

export default Nav;
