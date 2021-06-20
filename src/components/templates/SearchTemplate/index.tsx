import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import left from '../../../assets/images/arrow/left.svg';
import InputSearch from '../../molecules/InputSearch';
import Nav from '../../molecules/Nav';
import UpdateHeader from '../../molecules/UpdateHeader';
import SearchedSection from '../../organisms/SearchedSection';
import * as S from './style';

const SearchTemplate = (): ReactElement => {
  const history = useHistory();

  const [inputValue, setInputValue] = useState('');

  const onSearch = () => {
    if (inputValue) {
      history.push({
        pathname: '/search/list',
        state: { inputValue },
      });
    }
  };

  return (
    <section>
      <UpdateHeader arrow={left} />
      <S.Box>
        <S.PTag>
          무엇을
          <br />
          찾고 계신가요?
        </S.PTag>
        <InputSearch
          onSearch={onSearch}
          setInputValue={setInputValue}
          placeholder="검색어 입력"
          inputValue={inputValue}
          marginBottom={0}
        />
      </S.Box>
      <S.BottomBox>
        <SearchedSection />
        <Nav />
      </S.BottomBox>
    </section>
  );
};

export default SearchTemplate;
