import React, { ReactElement } from 'react';
import UpdateHeader from '../UpdateHeader';
import left from '../../../assets/images/arrow/whiteLeft.png';
import * as S from './style';

const MyTendencyTitle = (): ReactElement => {
  return (
    <S.Container>
      <UpdateHeader arrow={left} />
      <S.H1>빵덕이 분석했어요!</S.H1>
      <S.H2>방탈출 배링니님의 방탈출 성향은?</S.H2>
    </S.Container>
  );
};

export default MyTendencyTitle;
