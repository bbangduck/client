import React, { ReactElement, useState } from 'react';
import { useLocation } from 'react-router-dom';
import InputWithArrow from '../../molecules/InputWithArrow';
import Nav from '../../molecules/Nav';
import SearchCafeList from '../../organisms/SearchCafeList';
import SearchThemeList from '../../organisms/SearchThemeList';
import * as S from './style';

const SearchListTemplate = (): ReactElement => {
  const location = useLocation<{ inputValue: string }>();
  const initialValue = location?.state?.inputValue;
  const [newInputValue, setNewInputValue] = useState('');
  const result = 1;
  return (
    <section>
      <InputWithArrow inputValue={newInputValue} setInputValue={setNewInputValue} initialValue={initialValue} />
      {result ? (
        <S.Box>
          <S.PTag>
            <S.Span>24</S.Span>건의 검색결과
          </S.PTag>
          <SearchThemeList />
          <SearchCafeList />
        </S.Box>
      ) : (
        <S.NoResult>검색 결과가 없습니다.</S.NoResult>
      )}
      <Nav />
    </section>
  );
};

export default SearchListTemplate;
