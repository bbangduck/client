import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  image: string;
}
const AttentionThemeItem = ({ image }: Props): ReactElement => {
  return (
    <S.Li>
      <S.LeftBox>
        <S.ImgBox src={image} />
        <div>
          <S.H3>#1</S.H3>
          <S.PTag>[강남] 검은 사원</S.PTag>
          <S.Span>제로월드 강남점</S.Span>
        </div>
      </S.LeftBox>
      <S.RightBox>
        <S.Box1>높은 평점</S.Box1>
        <S.Box2>신규 테마</S.Box2>
      </S.RightBox>
    </S.Li>
  );
};

export default AttentionThemeItem;
