import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  position: number;
}
const ThemeNav = ({ position }: Props): ReactElement => {
  const arr = [
    { id: 1, content: '테마' },
    { id: 2, content: '분석' },
    { id: 3, content: '이벤트' },
    { id: 4, content: '리뷰' },
  ];

  return (
    <S.Nav>
      {arr.map((ar) => (
        <S.Box key={ar.id} border={position === ar.id}>
          <S.PTag border={position === ar.id}>{ar.content}</S.PTag>
        </S.Box>
      ))}
    </S.Nav>
  );
};

export default ThemeNav;
