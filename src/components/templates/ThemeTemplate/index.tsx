import React, { ReactElement, useState } from 'react';
import Nav from '../../molecules/Nav';
import ThemeNavSwiper from '../../molecules/ThemeNavSwiper';
import ThemesHeader from '../../molecules/ThemesHeader';
import filter from '../../../assets/images/filter/filter.png';
import * as S from './style';
import ThemeList from '../../organisms/ThemeList';
import FilterBtn from '../../atoms/filterBtn';
import FilterSlider from '../../organisms/FilterSlider';
import { useClickOutside } from '../../../hooks/useClickOutside';
import BottomModal from '../../molecules/BottomModal';

const ThemeTemplate = (): ReactElement => {
  const [filterDefault, setFilterDefault] = useState(true);
  const [visibleContentRef, filterOn, setFilterOn, clickOutside] = useClickOutside(false);
  const [visibleSequenceRef, sequenceOn, setSequenceOn, clickSequenceOutside] = useClickOutside(false);

  const onFirstBottomModalClick = () => {
    console.log('최신순');
  };

  const onSecondBottomModalClick = () => {
    console.log('평점 높은순');
  };

  const onLastBottomModalClick = () => {
    console.log('평점 낮은순');
  };

  return (
    <section>
      <ThemesHeader />
      <ThemeNavSwiper />
      <S.SquenceBox>
        <S.ClickBox onClick={() => setSequenceOn(true)} data-blink="blink">
          <S.Span data-blink="blink">평점순</S.Span>
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
    </section>
  );
};

export default ThemeTemplate;
