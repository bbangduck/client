/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useState, useEffect, useRef } from 'react';
import search from '../../../assets/images/search/search.png';
import deleteIcon from '../../../assets/images/delete/delete.png';
import * as S from './style';

interface Props {
  onSearch: () => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  placeholder: string;
  marginBottom?: number;
  initialValue?: string;
}
const InputSearch = ({
  onSearch,
  setInputValue,
  placeholder,
  inputValue,
  marginBottom,
  initialValue,
}: Props): ReactElement => {
  const [isFocus, setIsFocus] = useState(false);
  const [fakeInputValue, setFakeInputValue] = useState('');
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (initialValue && inputRef.current) {
      inputRef.current.value = initialValue;
    }
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFakeInputValue(e.target.value);
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

  const onDelete = () => {
    setInputValue('');
    setFakeInputValue('');
  };

  return (
    <S.Form onSubmit={onSearchClick} isFocus={isFocus} marginBottom={marginBottom || 0}>
      <S.Input
        type="text"
        placeholder={placeholder}
        onChange={onInputChange}
        value={fakeInputValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoComplete="off"
        ref={inputRef}
      />
      {inputValue ? <S.Img src={deleteIcon} alt="삭제" onClick={onDelete} /> : null}
      <S.Button type="submit">
        <img src={search} alt="찾기" />
      </S.Button>
    </S.Form>
  );
};

export default React.memo(InputSearch);
