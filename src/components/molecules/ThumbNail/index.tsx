import React, { ReactElement } from 'react';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';

const ThumbNail = (): ReactElement => {
  return (
    <S.Li>
      <S.ImgBox image={poster} />
      <S.PTag>검은 사원</S.PTag>
      <S.Span>제로월드 강남점</S.Span>
    </S.Li>
  );
};

export default ThumbNail;
