import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

const SearchListTemplate = (): ReactElement => {
  const location = useLocation<{ inputValue: string }>();
  const { inputValue } = location.state;

  console.log(inputValue);
  return (
    <section>
      <p>리스트</p>
    </section>
  );
};

export default SearchListTemplate;
