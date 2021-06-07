import React, { ReactElement } from 'react';
import * as S from './style';

const ThemeAdviceItem = (): ReactElement => {
  return (
    <div>
      <S.ImgBox>
        <img src="" alt="" />
      </S.ImgBox>
      <S.PTag>검은 사원</S.PTag>
      <S.Span>제로월드 강남점</S.Span>
    </div>
  );
};

export default ThemeAdviceItem;
