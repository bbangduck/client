import React, { ReactElement, useRef } from 'react';
import TimeField from 'react-simple-timefield';
import usePopAlarm from '../../../hooks/usePopAlarm';
import * as S from './style';

interface Props {
  setTimeState: React.Dispatch<React.SetStateAction<string>>;
  timeState: string;
  successValue: boolean | undefined;
}
const ReviewTime = ({ setTimeState, timeState, successValue }: Props): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [popAlarm] = usePopAlarm();

  const onTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeState(e.target.value);
  };

  const onFocus = () => {
    if (!successValue && inputRef) {
      inputRef?.current?.blur();
      setTimeState('00:00:00');
      popAlarm('탈출 실패시 시간을 입력할수없습니다.');
    }
  };

  return (
    <S.Container>
      <S.Title>탈출시간을 입력해주세요.</S.Title>
      <TimeField
        input={<S.Input type="text" ref={inputRef} onFocus={onFocus} />}
        showSeconds
        onChange={onTimeChange}
        value={timeState}
      />
    </S.Container>
  );
};

export default React.memo(ReviewTime);
