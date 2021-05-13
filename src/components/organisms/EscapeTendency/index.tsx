import React, { ReactElement } from 'react';
import MyPageSubTitle from '../../molecules/MyPageSubTitle';
import Tendency from '../../atoms/Tendency';
import * as S from './style';

const EscapeTendency = (): ReactElement => {
  const tendency: { id: number; item: string }[] | any = [
    { id: 1, item: '공포' },
    { id: 2, item: '스릴러' },
    { id: 3, item: '미스터리' },
    { id: 4, item: '드라마' },
  ];

  const suggestTendency = () => {
    return <S.PTag>방탈출을 진행하고 성향 분석을 해보세요.</S.PTag>;
  };

  const showTendencyList = () => {
    return tendency?.map((tend: { id: number; item: string }) => <Tendency key={tend.id} tendency={tend.item} />);
  };

  return (
    <S.Section tendency={tendency || false}>
      <MyPageSubTitle content="방탕출 성향" page="/" item={tendency} trueMargin="8px" falseMargin="40px" />
      <S.TendBox>{tendency ? showTendencyList() : suggestTendency()}</S.TendBox>
    </S.Section>
  );
};

export default EscapeTendency;
