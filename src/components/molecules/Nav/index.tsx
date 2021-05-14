import React, { ReactElement } from 'react';
import right from '../../../assets/images/arrow/right.png';
import NavItem from '../../atoms/NavItem/index';
import * as S from './style';

const Nav = (): ReactElement => {
  return (
    <nav>
      <S.Container>
        <NavItem src={right} name="홈" />
        <NavItem src={right} name="테마" />
        <NavItem src={right} name="지도" />
        <NavItem src={right} name="마이페이지" />
      </S.Container>
    </nav>
  );
};

export default Nav;
