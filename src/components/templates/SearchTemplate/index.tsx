import React, { ReactElement, useState } from 'react';
import left from '../../../assets/images/arrow/left.png';
import InputSearch from '../../molecules/InputSearch';
import Nav from '../../molecules/Nav';
import UpdateHeader from '../../molecules/UpdateHeader';
import SearchedSection from '../../organisms/SearchedSection';
import * as S from './style';

const SearchTemplate = (): ReactElement => {
  const [inputValue, setInputValue] = useState('');

  const Test = async () => {
    console.log(1);
  };

  return (
    <S.Section>
      <UpdateHeader arrow={left} />
      <S.Box>
        <S.PTag>
          무엇을
          <br />
          찾고 계신가요?
        </S.PTag>
        <InputSearch onSearch={Test} setInputValue={setInputValue} placeholder="검색어 입력" />
      </S.Box>
      <SearchedSection />
      <Nav />
    </S.Section>
  );
};

export default SearchTemplate;
