/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from 'react';
import * as S from './style';

interface Props {
  successClicked: boolean | undefined;
  setSuccessState: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setTimeState: React.Dispatch<React.SetStateAction<string>>;
}
const ReviewSuccess = ({ successClicked, setSuccessState, setTimeState }: Props): ReactElement => {
  const btnContents = [
    { id: 1, content: '성공', requestValue: true },
    { id: 2, content: '실패', requestValue: false },
  ];

  const onBtnClick = (id: number) => {
    btnContents.forEach((btn) => {
      if (btn.id === id) setSuccessState(btn.requestValue);
    });
  };

  useEffect(() => {
    if (!successClicked) {
      setTimeState('00:00:00');
    }
  }, [successClicked]);

  return (
    <div style={{ padding: '0 20px' }}>
      <S.Title>방탈출에 성공하셨어요?</S.Title>
      <S.Box>
        {btnContents.map((btn) => (
          <S.Btn
            key={btn.id}
            type="button"
            clicked={successClicked === btn.requestValue}
            onClick={() => onBtnClick(btn.id)}
          >
            {btn.content}
          </S.Btn>
        ))}
      </S.Box>
    </div>
  );
};

export default React.memo(ReviewSuccess);
