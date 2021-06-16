import React, { ReactElement } from 'react';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';

const ThumbNail = (): ReactElement => {
  return (
    <S.Li data-blink="cover">
      <S.ImgBox image={poster} data-blink="cover" />
      <S.PTag data-blink="cover">검은 사원</S.PTag>
      <S.Span data-blink="cover">제로월드 강남점</S.Span>
    </S.Li>
  );
};

export default ThumbNail;
