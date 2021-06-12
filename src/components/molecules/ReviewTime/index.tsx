import React, { ReactElement } from 'react';
import TimeField from 'react-simple-timefield';
import * as S from './style';

interface Props {
  setTimeState: React.Dispatch<React.SetStateAction<string>>;
}
const ReviewTime = ({ setTimeState }: Props): ReactElement => {
  const onTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeState(e.target.value);
  };

  return (
    <S.Container>
      <S.Title>방탈출에 성공하셨어요?</S.Title>
      <TimeField input={<S.Input type="text" />} showSeconds onChange={onTimeChange} />
    </S.Container>
  );
};

export default React.memo(ReviewTime);
