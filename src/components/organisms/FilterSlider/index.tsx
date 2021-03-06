/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import reset from '../../../assets/images/reset/reset.svg';
import FilterList from '../FilterList';
import filterTypes from '../../../utils/themeSliderTypes';
import * as S from './style';
import { filterThemeQuery } from '../../../stores/themeQueryReducer';
import { AppDispatch } from '../../../stores/rootReducer';

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
  const dispatch = useDispatch<AppDispatch>();
  const [filterListOn, setFilterListOn] = useState(0);
  const [tryReset, setTryReset] = useState(false);
  const [themeType, setThemeType] = useState('');
  const [rating, setRating] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [activity, setActivity] = useState('');

  useEffect(() => {
    const themeFilterQuery = {
      themeType,
      rating,
      numberOfPeople,
      difficulty,
      activity,
    };

    dispatch(filterThemeQuery(themeFilterQuery));
  }, [themeType, rating, numberOfPeople, difficulty, activity]);

  const sendSetFilterStateAsProps = (id: number): React.Dispatch<React.SetStateAction<string>> | undefined => {
    if (id === 1) return setThemeType;
    if (id === 2) return setRating;
    if (id === 3) return setNumberOfPeople;
    if (id === 4) return setDifficulty;
    if (id === 5) return setActivity;
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
          <S.PTag>??????</S.PTag>
          <S.RightBox onClick={onReset} data-blink="blink">
            <img src={reset} alt="?????????" data-blink="blink" />
            <S.Span data-blink="blink">?????????</S.Span>
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
