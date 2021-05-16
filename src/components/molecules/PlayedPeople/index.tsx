import React, { ReactElement } from 'react';
import * as S from './style';

const PlayedPeople = (): ReactElement => {
  return (
    <S.Container>
      <S.Images>
        <S.ImgBox1>
          <img src="" alt="" />
        </S.ImgBox1>
        <S.ImgBox2>
          <img src="" alt="" />
        </S.ImgBox2>
        <S.ImgBox3>
          <img src="" alt="" />
        </S.ImgBox3>
      </S.Images>
      <S.PTag>
        &quot;<S.Span>40명</S.Span>의 빵덕이 플레이했어요&quot;
      </S.PTag>
    </S.Container>
  );
};

export default PlayedPeople;
