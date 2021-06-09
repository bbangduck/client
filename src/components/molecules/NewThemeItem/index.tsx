import React, { ReactElement } from 'react';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';

const NewThemeItem = (): ReactElement => {
  return (
    <li>
      <S.ImgBox image={poster} />
      <S.H3>[강남] 어느겨울밤</S.H3>
      <S.PTag>제로월드 강남점</S.PTag>
    </li>
  );
};

export default NewThemeItem;
