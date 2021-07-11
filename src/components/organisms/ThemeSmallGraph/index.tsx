/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import document from '../../../assets/images/document/document.png';

export type ThemeAnalysisType = {
  genre: {
    genreId: number;
    genreCode: string;
    genreName: string;
  };
  evaluatedCount: number;
}[];
interface Props {
  pushTo: string;
  title?: string;
  graph?: ThemeAnalysisType | [];
}
const ThemeSmallGraph = ({ pushTo, title, graph }: Props): ReactElement => {
  const history = useHistory();

  // const graph = [
  //   { id: 1, title: '스릴러', amount: 12 },
  //   { id: 2, title: '공포', amount: 6 },
  //   { id: 3, title: '로맨스', amount: 350 },
  //   { id: 4, title: '추리', amount: 2 },
  //   { id: 5, title: '판타지', amount: 24 },
  //   { id: 6, title: 'SF', amount: 16 },
  // ];
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

  return (
    <>
      {graph?.[0] ? (
        <S.Container>
          <S.Title>{title}</S.Title>
          <S.GraphBox>
            {graph.map((item: any) => (
              <S.Box key={item.genre.genreId}>
                <S.P>{item.genre.genreName}</S.P>
                <S.BarBg>
                  <S.Bar width={widthValue(item.evaluatedCount)} />
                </S.BarBg>
              </S.Box>
            ))}
          </S.GraphBox>
          <S.BottomBox>
            <S.Left>
              총 <S.Span>35</S.Span>명의 회원이 평가했어요!
            </S.Left>
            <S.Right onClick={() => history.push(pushTo)} data-blink="blink">
              <S.IsPTag data-blink="blink">자세히 보기</S.IsPTag>
            </S.Right>
          </S.BottomBox>
        </S.Container>
      ) : (
        <S.Aside>
          <S.Img src={document} alt="분석중" />
          <S.PTag>아직 테마가 분석 중 인가봐요</S.PTag>
        </S.Aside>
      )}
    </>
  );
};

export default ThemeSmallGraph;
