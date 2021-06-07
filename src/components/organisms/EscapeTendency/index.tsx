import React, { ReactElement } from 'react';
import MyPageSubTitle from '../../molecules/MyPageSubTitle';
import Tendency from '../../atoms/Tendency';
import * as S from './style';
import MyPageGuide from '../../atoms/MyPageGuide';

const EscapeTendency = (): ReactElement => {
  const tendency: { id: number; item: string }[] | any = [
    { id: 1, item: '공포' },
    { id: 2, item: '스릴러' },
    { id: 3, item: '미스터리' },
    { id: 4, item: '드라마' },
  ];

  const suggestTendency = () => {
    return <MyPageGuide content="방탈출을 진행하고 성향 분석을 해보세요." />;
  };

  const showTendencyList = () => {
    return tendency?.map((tend: { id: number; item: string }) => <Tendency key={tend.id} tendency={tend.item} />);
  };

  return (
    <S.Section tendency={tendency || false}>
      <MyPageSubTitle
        content="방탕출 성향"
        page="/mypage/tendency"
        item={tendency}
        trueMargin="8px"
        falseMargin="40px"
        arrow
      />
      <S.TendBox>{tendency ? showTendencyList() : suggestTendency()}</S.TendBox>
    </S.Section>
  );
};

export default EscapeTendency;
