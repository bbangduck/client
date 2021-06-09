import React, { ReactElement } from 'react';
import * as S from './style';

const PickItem = (): ReactElement => {
  return (
    <S.Li>
      <S.PTag>제로월드 서현점</S.PTag>
      <S.Span>서울 서초동 930번지 34</S.Span>
      <div>
        <S.Span>보유테마</S.Span>
        <S.Span>
          <S.Span2>&nbsp;&nbsp;&nbsp;8</S.Span2>개
        </S.Span>
      </div>
      <S.MoreBox>More</S.MoreBox>
    </S.Li>
  );
};

export default PickItem;
