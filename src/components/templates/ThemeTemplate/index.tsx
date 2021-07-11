import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Nav from '../../molecules/Nav';
import ThemeNavSwiper from '../../molecules/ThemeNavSwiper';
import ThemesHeader from '../../molecules/ThemesHeader';
import filter from '../../../assets/images/filter/filter.svg';
import * as S from './style';
import ThemeList from '../../organisms/ThemeList';
import FilterBtn from '../../atoms/filterBtn';
import FilterSlider from '../../organisms/FilterSlider';
import { useClickOutside } from '../../../hooks/useClickOutside';
import BottomModal from '../../molecules/BottomModal';
import { AppDispatch } from '../../../stores/rootReducer';
import { filterThemeQuery } from '../../../stores/themeQueryReducer';

const ThemeTemplate = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const [filterDefault, setFilterDefault] = useState(true);
  const [filterValue, setFilterValue] = useState('최신순');
  const [sortCondition, setSortCondition] = useState('LATEST');
  const [visibleContentRef, filterOn, setFilterOn, clickOutside] = useClickOutside(false);
  const [visibleSequenceRef, sequenceOn, setSequenceOn, clickSequenceOutside] = useClickOutside(false);

  useEffect(() => {
    if (filterValue === '최신순') setSortCondition('LATEST');
    if (filterValue === '평점 높은순') setSortCondition('RATING_ASC');
    if (filterValue === '평점 낮은순') setSortCondition('RATING_DESC');
  }, [filterValue]);

  useEffect(() => {
    const query = {
      sortCondition,
    };
    dispatch(filterThemeQuery(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortCondition]);

  const onFirstBottomModalClick = () => {
    setFilterValue('최신순');
    setSequenceOn(false);
  };

  const onSecondBottomModalClick = () => {
    setFilterValue('평점 높은순');
    setSequenceOn(false);
  };

  const onLastBottomModalClick = () => {
    setFilterValue('평점 낮은순');
    setSequenceOn(false);
  };

  return (
    <S.Section>
      <ThemesHeader />
      <ThemeNavSwiper />
      <S.SquenceBox>
        <S.ClickBox onClick={() => setSequenceOn(true)} data-blink="blink">
          <S.Span data-blink="blink">{filterValue}</S.Span>
          <img src={filter} alt="필터" data-blink="blink" />
        </S.ClickBox>
      </S.SquenceBox>
      <ThemeList />
      <FilterBtn setFilterState={setFilterOn} filterDefault={filterDefault} />
      <Nav />
      {/* 슬라이더 */}
      <FilterSlider
        visibleContentRef={visibleContentRef}
        setFilterOn={setFilterOn}
        clickOutsideClose={clickOutside}
        filterOn={filterOn}
        setFilterDefault={setFilterDefault}
      />
      {/* 모달창 */}
      <BottomModal
        title="정렬"
        firstBtn="최신순"
        onFirstClick={onFirstBottomModalClick}
        secondBtn="평점 높은순"
        onSecondClick={onSecondBottomModalClick}
        lastBtn="평점 낮은순"
        onLastClick={onLastBottomModalClick}
        visibleContentRef={visibleSequenceRef}
        clickOutside={clickSequenceOutside}
        isOn={sequenceOn}
      />
    </S.Section>
  );
};

export default ThemeTemplate;
