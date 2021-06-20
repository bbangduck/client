import React, { ReactElement } from 'react';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';

const NewThemeItem = (): ReactElement => {
  return (
    <S.Li data-blink="cover">
      <S.ImgBox src={poster} data-blink="cover" />
      <S.H3 data-blink="cover">[강남] 어느겨울밤</S.H3>
      <S.PTag data-blink="cover">제로월드 강남점</S.PTag>
    </S.Li>
  );
};

export default NewThemeItem;
