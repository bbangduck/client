import React, { ReactElement } from 'react';
import homeDefault from '../../../assets/images/home/home.png';
import homeClicked from '../../../assets/images/home/homeBlack.png';
import bookDefault from '../../../assets/images/book/book.png';
import bookClicked from '../../../assets/images/book/blackBook.png';
import mapDefault from '../../../assets/images/map/whiteMap.png';
import mapClicked from '../../../assets/images/map/map.png';
import humanDefault from '../../../assets/images/human/whiteHuman.png';
import humanClicked from '../../../assets/images/human/blackHuman.png';
import NavItem from '../../atoms/NavItem/index';
import * as S from './style';

const Nav = (): ReactElement => {
  const urlLocation = window.location.href;
  const isHome = urlLocation.includes('home');
  const isTheme = urlLocation.includes('theme');
  const isMap = urlLocation.includes('map');
  const isMypage = urlLocation.includes('mypage');

  const navList = [
    { id: 1, title: '홈', pushTo: '/home', src: isHome ? homeClicked : homeDefault },
    { id: 2, title: '테마', pushTo: '/theme', src: isTheme ? bookClicked : bookDefault },
    { id: 3, title: '지도', pushTo: '/map', src: isMap ? mapClicked : mapDefault },
    { id: 4, title: '마이페이지', pushTo: '/mypage', src: isMypage ? humanClicked : humanDefault },
  ];
  return (
    <nav>
      <S.Ul>
        {navList.map((nav) => (
          <NavItem key={nav.id} src={nav.src} name={nav.title} pushTo={nav.pushTo} />
        ))}
      </S.Ul>
    </nav>
  );
};

export default Nav;
