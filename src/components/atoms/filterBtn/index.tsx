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
    <S.Container onClick={onFilterClick} data-blink="blink">
      {filterDefault ? null : <S.Dot data-blink="blink" />}
      <img src={filterDefault ? filter : filterBlue} alt="필터" data-blink="blink" />
      <S.PTag filtered={filterDefault} data-blink="blink">
        필터
      </S.PTag>
    </S.Container>
  );
};

export default FilterBtn;
