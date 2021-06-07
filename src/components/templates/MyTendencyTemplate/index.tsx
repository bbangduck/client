import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import userExist from '../../../utils/userExist';
import MyTendencyTitle from '../../molecules/MyTendencyTitle';
import TendencyIntro from '../../organisms/TendencyIntro';
import ThemeSmallGraph from '../../organisms/ThemeSmallGraph';
import * as S from './style';
import ThemeAdvice from '../../organisms/ThemeAdvice';

const MyTendencyTemplate = (): ReactElement => {
  if (!userExist()) return <Redirect to="/" />;
  return (
    <section>
      <MyTendencyTitle />
      <S.Box>
        <TendencyIntro />
        <ThemeSmallGraph pushTo="/" title="선호장르" />
        <ThemeAdvice />
      </S.Box>
    </section>
  );
};

export default MyTendencyTemplate;
