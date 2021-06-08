import React, { ReactElement } from 'react';
import search from '../../../assets/images/search/search.png';
import * as S from './style';

interface Props {
  onSearch: () => Promise<void>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
const InputSearch = ({ onSearch, setInputValue }: Props): ReactElement => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let debounce = null;
    if (debounce) {
      clearTimeout(debounce);
    }
    debounce = setTimeout(() => {
      setInputValue(e.target.value);
    }, 500);
  };

  const onSearchClick = () => {
    onSearch();
  };

  return (
    <S.Form>
      <S.Input type="text" placeholder="친구 검색" onChange={onInputChange} />
      <S.Img src={search} alt="찾기" onClick={onSearchClick} />
    </S.Form>
  );
};

export default InputSearch;
