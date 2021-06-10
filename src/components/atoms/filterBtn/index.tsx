import React, { ReactElement } from 'react';
import filter from '../../../assets/images/filter/filter2.png';
import filterBlue from '../../../assets/images/filter/filter2Blue.png';
import * as S from './style';

interface Props {
  setFilterState: React.Dispatch<React.SetStateAction<boolean>>;
  filterDefault: boolean;
}
const FilterBtn = ({ setFilterState, filterDefault }: Props): ReactElement => {
  const onFilterClick = () => {
    setFilterState(true);
  };

  return (
    <S.Container onClick={onFilterClick}>
      {filterDefault ? null : <S.Dot />}
      <img src={filterDefault ? filter : filterBlue} alt="필터" />
      <S.PTag filtered={filterDefault}>필터</S.PTag>
    </S.Container>
  );
};

export default FilterBtn;
