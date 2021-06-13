import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../stores/rootReducer';
import * as S from './style';

const TopAlarm = (): ReactElement => {
  const { pop, content } = useSelector<ReducerType, { pop: boolean; content: string }>((state) => state.popAlarm);

  return (
    <S.Container pop={pop}>
      <p>{content}</p>
    </S.Container>
  );
};

export default TopAlarm;
