import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/whiteLeft.png';
import * as S from './style';

const ThemeAnalysisTemplate = (): ReactElement => {
  const totalValue = graph.reduce((acc: number[], curr: { id: number; title: string; amount: number }) => {
    if (!acc[0]) {
      acc[0] = curr.amount;
    } else if (acc[0] < curr.amount) {
      acc[0] = curr.amount;
    }
    return acc;
  }, []);

  const widthValue = (state: number): string => {
    const myValue = (state / totalValue[0]) * 90;
    return `${myValue}%`;
  };

  return (
    <S.Section>
      <UpdateHeader arrow={left} />
      <S.PTag>테마 분석 상세</S.PTag>
      <S.Box>
        {graph.map((item) => (
          <S.Item key={item.id}>
            <S.P>{item.title}</S.P>
            <S.BarBg>
              <S.Bar width={widthValue(item.amount)} />
            </S.BarBg>
            <S.People>{item.amount}명</S.People>
          </S.Item>
        ))}
      </S.Box>
      <S.BtnBox>
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
