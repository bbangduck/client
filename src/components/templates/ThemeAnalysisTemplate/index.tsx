import React, { ReactElement } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/whiteLeft.png';
import * as S from './style';
import useGetUserData from '../../../swr/useGetUserData';
import userExist from '../../../utils/userExist';
import useGetThemeAnalysis from '../../../swr/useGetThemeAnalysis';
import Loading from '../../atoms/Loading';

const ThemeAnalysisTemplate = (): ReactElement => {
  const history = useHistory();
  const { themeId } = useParams<ParamsTypes>();
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;
  const { data: graph, loading } = useGetThemeAnalysis(themeId);

  let max = 0;
  graph?.forEach((item) => {
    const { evaluatedCount } = item;
    if (!max) max = evaluatedCount;
    if (max && max < evaluatedCount) max = evaluatedCount;
  });

  const widthValue = (state: number): string => {
    const myValue = (state / max) * 90;
    return `${myValue}%`;
  };

  const onClickReview = () => {
    if (userExist()) {
      history.push(`/theme/${themeId}/review`);
    } else {
      history.push('/login');
    }
  };

  if (loading) return <Loading />;
  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <S.Section>
      <UpdateHeader arrow={left} />
      <S.PTag>테마 분석 상세</S.PTag>
      <S.Box>
        {graph.map((item) => (
          <S.Item key={item.genre.genreId}>
            <S.P>{item.genre.genreName}</S.P>
            <S.BarBg>
              <S.Bar width={widthValue(item.evaluatedCount)} />
            </S.BarBg>
            <S.People>{item.evaluatedCount}명</S.People>
          </S.Item>
        ))}
      </S.Box>
      <S.BtnBox onClick={onClickReview}>
        <S.Btn type="button" data-blink="blink">
          리뷰쓰고 분석 참여하기
        </S.Btn>
      </S.BtnBox>
    </S.Section>
  );
};

export default ThemeAnalysisTemplate;

const graph = [
  { id: 1, title: '스릴러', amount: 35 },
  { id: 2, title: '공포', amount: 12 },
  { id: 3, title: '로맨스', amount: 40 },
  { id: 4, title: '추리', amount: 4 },
  { id: 5, title: '감성', amount: 12 },
  { id: 6, title: '모험', amount: 27 },
  { id: 7, title: '잠입', amount: 22 },
  { id: 8, title: '범죄', amount: 17 },
  { id: 9, title: '코미디', amount: 35 },
  { id: 10, title: '판타지', amount: 0 },
  { id: 11, title: '19금', amount: 0 },
  { id: 12, title: '역사', amount: 0 },
  { id: 13, title: 'SF', amount: 0 },
  { id: 14, title: '음악', amount: 0 },
  { id: 15, title: '드라마', amount: 0 },
  { id: 16, title: '미스터리', amount: 0 },
  { id: 17, title: '아케이드', amount: 0 },
  { id: 18, title: '액션', amount: 0 },
  { id: 19, title: '야외', amount: 0 },
  { id: 20, title: '기타', amount: 0 },
];
