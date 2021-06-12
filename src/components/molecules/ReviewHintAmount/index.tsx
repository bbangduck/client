import React, { ReactElement, useState, useEffect } from 'react';
import * as S from './style';

interface Props {
  setHintState: React.Dispatch<React.SetStateAction<string>>;
  hint: string;
}
const ReviewHintAmount = ({ setHintState, hint }: Props): ReactElement => {
  const btnList = [
    { id: 1, content: 'No' },
    { id: 2, content: '1' },
    { id: 3, content: '2' },
    { id: 4, content: '3+' },
  ];

  const onBtnClick = (clickedId: number) => {
    btnList.forEach((btn) => {
      if (btn.id === clickedId) setHintState(btn.content);
    });
  };

  return (
    <S.Container>
      <S.PTag>힌트</S.PTag>
      <S.Box>
        {btnList.map((btn) => (
          <S.SelectBtn onClick={() => onBtnClick(btn.id)} key={btn.id} clicked={btn.content === hint}>
            {btn.content}
          </S.SelectBtn>
        ))}
      </S.Box>
    </S.Container>
  );
};

export default ReviewHintAmount;
