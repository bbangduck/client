import React, { ReactElement, useState } from 'react';
import reset from '../../../assets/images/reset/reset.png';
import FilterList from '../FilterList';
import filterTypes from '../../../utils/themeSliderTypes';
import * as S from './style';

interface Props {
  visibleContentRef: React.MutableRefObject<HTMLDivElement | null>;
  setFilterOn: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterDefault: React.Dispatch<React.SetStateAction<boolean>>;
  clickOutsideClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  filterOn: boolean;
}
const FilterSlider = ({
  visibleContentRef,
  setFilterOn,
  clickOutsideClose,
  filterOn,
  setFilterDefault,
}: Props): ReactElement => {
  const [filterListOn, setFilterListOn] = useState(0);
  const [tryReset, setTryReset] = useState(false);

  const onReset = () => {
    setFilterOn(false);
    setFilterListOn(0);
    setTryReset((prev) => !prev);
    setFilterDefault(true);
  };

  return (
    <S.Container onClick={clickOutsideClose} filterOn={filterOn}>
      <S.ContentBox ref={visibleContentRef}>
        <S.HeaderBox>
          <S.PTag>필터</S.PTag>
          <S.RightBox onClick={onReset}>
            <img src={reset} alt="초기화" />
            <S.Span>초기화</S.Span>
          </S.RightBox>
        </S.HeaderBox>
        {filterTypes.map((type) => (
          <FilterList
            key={type.id}
            isOn={filterListOn === type.id}
            setIsOn={setFilterListOn}
            typeNumber={type.id}
            title={type.title}
            typeList={type.types}
            reset={tryReset}
            setFilterDefault={setFilterDefault}
          />
        ))}
      </S.ContentBox>
    </S.Container>
  );
};

export default FilterSlider;
