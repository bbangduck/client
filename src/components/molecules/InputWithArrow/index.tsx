import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import left from '../../../assets/images/arrow/left.svg';
import InputSearch from '../InputSearch';
import * as S from './style';

interface Props {
  initialValue: string;
  inputValue?: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
const InputWithArrow = ({ inputValue, setInputValue, initialValue }: Props): ReactElement => {
  const history = useHistory();

  const onSearch = () => {
    console.log('찾아');
  };

  return (
    <S.Container>
      <S.Img src={left} alt="뒤로가기" data-blink="blink" onClick={() => history.goBack()} />
      <InputSearch
        setInputValue={setInputValue}
        inputValue={inputValue}
        placeholder="검색어 입력"
        onSearch={onSearch}
        initialValue={initialValue}
      />
    </S.Container>
  );
};

export default InputWithArrow;
