import React, { ReactElement, useState } from 'react';
import Loading from '../atoms/Loading';
import * as S from './TestComponent.style';

const TestComponent = (): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  // const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!emailRegex.test(inputValue)) console.log('에러');
    // if (inputValue && emailRegex.test(inputValue)) console.log(inputValue);
  };

  const onDelete = () => {
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" autoComplete="off" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
      <button type="submit">다음</button>
      <button type="button" onClick={onDelete}>
        삭제
      </button>
      <S.Div>sdasdasdsadsadsadasdasd</S.Div>
      <Loading />
    </form>
  );
};

export default TestComponent;
