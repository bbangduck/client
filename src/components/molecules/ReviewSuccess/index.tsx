import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  successClicked: string;
  setSuccessState: React.Dispatch<React.SetStateAction<string>>;
}
const ReviewSuccess = ({ successClicked, setSuccessState }: Props): ReactElement => {
  const btnContents = [
    { id: 1, content: '성공' },
    { id: 2, content: '실패' },
  ];

  const onBtnClick = (id: number) => {
    btnContents.forEach((btn) => {
      if (btn.id === id) setSuccessState(btn.content);
    });
  };

  return (
    <div>
      <S.Title>방탈출에 성공하셨어요?</S.Title>
      <S.Box>
        {btnContents.map((btn) => (
          <S.Btn key={btn.id} type="button" clicked={successClicked === btn.content} onClick={() => onBtnClick(btn.id)}>
            {btn.content}
          </S.Btn>
        ))}
      </S.Box>
    </div>
  );
};

export default React.memo(ReviewSuccess);
