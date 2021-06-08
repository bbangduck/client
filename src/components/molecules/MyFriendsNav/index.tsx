import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  navClick: number;
  setNavClick: React.Dispatch<React.SetStateAction<number>>;
}
const MyFriendsNav = ({ navClick, setNavClick }: Props): ReactElement => {
  const navOption = [
    { id: 0, content: '친구 관리' },
    { id: 1, content: '친구 신청' },
  ];

  const onNavClick = (clickedId: number) => {
    if (clickedId === 1) {
      setNavClick(1);
    } else {
      setNavClick(0);
    }
  };

  return (
    <S.Container>
      {navOption.map((navItem) => (
        <S.PTag key={navItem.id} onClick={() => onNavClick(navItem.id)} clicked={navClick === navItem.id}>
          {navItem.content}
        </S.PTag>
      ))}
    </S.Container>
  );
};

export default MyFriendsNav;
