import React, { ReactElement } from 'react';
import filter from '../../../assets/images/filter/filter2.png';
import * as S from './style';

const FilterBtn = (): ReactElement => {
  return (
    <S.Container>
      <img src={filter} alt="필터" />
      <S.PTag>필터</S.PTag>
    </S.Container>
  );
};

export default FilterBtn;
