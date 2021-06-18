import React, { ReactElement, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ThemeAnalysis from '../../molecules/ThemeAnalysis';
import ThemeEvent from '../../molecules/ThemeEvent';
import ThemeExplain from '../../molecules/ThemeExplain';
import ThemeNav from '../../molecules/ThemeNav';
import ThemeHeader from '../../organisms/ThemeHeader';
import ThemeReview from '../../organisms/ThemeReview';
import { useThemeObserver } from '../../../hooks/useThemeObserver';
import ReviewBottom from '../../molecules/ReviewBottom';
import useGetUserData from '../../../swr/useGetUserData';
import userExist from '../../../utils/userExist';

const ThemeDetailTemplate = (): ReactElement => {
  const [navNumber, setNavNumber] = useState(1);
  const [explainRef] = useThemeObserver(setNavNumber, 1);
  const [analysisRef] = useThemeObserver(setNavNumber, 2);
  const [eventRef] = useThemeObserver(setNavNumber, 3);
  const [reviewRef] = useThemeObserver(setNavNumber, 4);
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <ThemeHeader />
      <ThemeNav position={navNumber} />
      <ThemeExplain isRef={explainRef} />
      <ThemeAnalysis isRef={analysisRef} />
      <ThemeEvent
        // event="[제로호텔 김포], [제로호텔L 강남]
        // 두 지점 중 한 지점 체험한 경우 50%할인"
        isRef={eventRef}
      />
      <ThemeReview isRef={reviewRef} event />
      <ReviewBottom />
    </section>
  );
};

export default ThemeDetailTemplate;
