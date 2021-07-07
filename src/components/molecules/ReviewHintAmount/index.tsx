import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  setHintState: React.Dispatch<React.SetStateAction<string>>;
  hint: string;
}
const ReviewHintAmount = ({ setHintState, hint }: Props): ReactElement => {
  const btnList = [
    { id: 1, content: 'No', requestValue: 'NONE' },
    { id: 2, content: '1', requestValue: 'ONE' },
    { id: 3, content: '2', requestValue: 'TWO' },
    { id: 4, content: '3+', requestValue: 'THREE_OR_MORE' },
  ];

  const onBtnClick = (clickedId: number) => {
    btnList.forEach((btn) => {
      if (btn.id === clickedId) setHintState(btn.requestValue);
    });
  };

  return (
    <S.Container>
      <S.PTag>힌트는 몇개 사용하셨어요?</S.PTag>
      <S.Box>
        {btnList.map((btn) => (
          <S.SelectBtn onClick={() => onBtnClick(btn.id)} key={btn.id} clicked={btn.requestValue === hint}>
            {btn.content}
          </S.SelectBtn>
        ))}
      </S.Box>
    </S.Container>
  );
};

export default React.memo(ReviewHintAmount);
