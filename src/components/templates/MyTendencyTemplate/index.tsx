import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import userExist from '../../../utils/userExist';
import MyTendencyTitle from '../../molecules/MyTendencyTitle';
import TendencyIntro from '../../organisms/TendencyIntro';
import ThemeSmallGraph from '../../organisms/ThemeSmallGraph';
import ThemeAdvice from '../../organisms/ThemeAdvice';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import * as S from './style';

const MyTendencyTemplate = (): ReactElement => {
  const data = 0;

  if (!userExist()) return <Redirect to="/" />;
  return (
    <section>
      {data ? (
        <>
          <MyTendencyTitle />
          <S.Box>
            <TendencyIntro />
            <ThemeSmallGraph pushTo="/" title="선호장르" />
            <ThemeAdvice />
          </S.Box>
        </>
      ) : (
        <S.Div>
          <UpdateHeader arrow={left} />
          <S.H1>
            앗,아직 데이터가
            <br />
            부족해서 분석할 수 없어요
          </S.H1>
          <S.H2>
            리뷰 작성하고
            <br />내 방탈출 성향을 분석해보세요
          </S.H2>
          <S.Button type="button">리뷰쓰고 데이터 추가하기</S.Button>
        </S.Div>
      )}
    </section>
  );
};

export default MyTendencyTemplate;
