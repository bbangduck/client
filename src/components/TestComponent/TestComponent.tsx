import React, { useCallback } from 'react';
import * as Styled from './TestComponent.style';
import useCounter from '../../hooks/useCounter';

const TestComponent = () => {
  const { data, mutate } = useCounter();

  const up = useCallback(() => mutate(data + 1), [data, mutate]);
  const down = useCallback(() => mutate(data - 1), [data, mutate]);

  return (
    <div>
      <Styled.Ptag>test</Styled.Ptag>
      <p>{data}</p>
      <button type="button" onClick={up}>
        up
      </button>
      <button type="button" onClick={down}>
        down
      </button>
    </div>
  );
};

export default TestComponent;
