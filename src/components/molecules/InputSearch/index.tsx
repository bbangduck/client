import React, { ReactElement, useState } from 'react';
import search from '../../../assets/images/search/search.png';
import deleteIcon from '../../../assets/images/delete/delete.png';
import * as S from './style';

interface Props {
  onSearch: () => Promise<void>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  placeholder: string;
}
const InputSearch = ({ onSearch, setInputValue, placeholder, inputValue }: Props): ReactElement => {
  const [isFocus, setIsFocus] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <S.Form onSubmit={onSearchClick} isFocus={isFocus}>
      <S.Input
        type="text"
        placeholder={placeholder}
        onChange={onInputChange}
        value={inputValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoComplete="off"
      />
      {inputValue ? <S.Img src={deleteIcon} alt="삭제" onClick={() => setInputValue('')} /> : null}
      <S.Button type="submit">
        <img src={search} alt="찾기" />
      </S.Button>
    </S.Form>
  );
};

export default InputSearch;
