import React, { ReactElement } from 'react';
import search from '../../../assets/images/search/search.png';
import * as S from './style';

interface Props {
  onSearch: () => Promise<void>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}
const InputSearch = ({ onSearch, setInputValue, placeholder }: Props): ReactElement => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let debounce = null;
    if (debounce) {
      clearTimeout(debounce);
    }
    debounce = setTimeout(() => {
      setInputValue(e.target.value);
    }, 500);
  };

  const onSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <S.Form onSubmit={onSearchClick}>
      <S.Input type="text" placeholder={placeholder} onChange={onInputChange} />
      <S.Button type="submit">
        <img src={search} alt="찾기" />
      </S.Button>
    </S.Form>
  );
};

export default InputSearch;
