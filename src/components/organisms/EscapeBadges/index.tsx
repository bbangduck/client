import React, { ReactElement } from 'react';
import BadgeList from '../../molecules/BadgeList';
import MyPageSubTitle from '../../molecules/MyPageSubTitle';
import MyPageGuide from '../../atoms/MyPageGuide';
import * as S from './style';

const EscapeBadges = (): ReactElement => {
  const badgeList = [
    { src: '', content: '공포테마 20회' },
    { src: '', content: '비밀의 화원 건대 완료' },
    { src: '', content: '제로월드 강남 완료' },
    { src: '', content: '로맨스 5회' },
  ];

  return (
    <S.Section item={badgeList}>
      <MyPageSubTitle content="획득 배지" page="/" item={badgeList} trueMargin="8px" falseMargin="40px" />
      {badgeList ? <BadgeList list={badgeList} /> : <MyPageGuide content="획득한 배지가 없습니다." />}
    </S.Section>
  );
};

export default EscapeBadges;
