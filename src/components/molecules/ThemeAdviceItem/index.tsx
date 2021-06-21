import React, { ReactElement } from 'react';
import test from '../../../assets/images/test/poster.jpg';
import * as S from './style';

const ThemeAdviceItem = (): ReactElement => {
  return (
    <S.Container data-blink="cover">
      <S.ImgBox data-blink="cover">
        <S.Img src={test} alt="" />
      </S.ImgBox>
      <S.PTag data-blink="cover">검은 사원</S.PTag>
      <S.Span data-blink="cover">제로월드 강남점</S.Span>
    </S.Container>
  );
};

export default ThemeAdviceItem;
