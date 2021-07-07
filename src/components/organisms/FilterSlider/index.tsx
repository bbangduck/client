/* eslint-disable consistent-return */
import React, { ReactElement, useState } from 'react';
import reset from '../../../assets/images/reset/reset.svg';
import FilterList from '../FilterList';
import filterTypes from '../../../utils/themeSliderTypes';
import * as S from './style';
import useFilterThemes from '../../../hooks/useFilterThemes';

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
  const [setThemeType, setRating, setNumberOfPeople, setDifficulty, setActivity] = useFilterThemes();

  const sendSetFilterStateAsProps = (id: number): React.Dispatch<React.SetStateAction<string>> | undefined => {
    if (id === 1) return setThemeType;
    if (id === 2) return setRating;
    if (id === 3) return setNumberOfPeople;
    if (id === 4) return setDifficulty;
    if (id === 5) return setActivity;
    return undefined;
  };

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
          <S.RightBox onClick={onReset} data-blink="blink">
            <img src={reset} alt="초기화" data-blink="blink" />
            <S.Span data-blink="blink">초기화</S.Span>
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
            setFilterCheck={sendSetFilterStateAsProps(type.id)}
          />
        ))}
      </S.ContentBox>
    </S.Container>
  );
};

export default FilterSlider;
