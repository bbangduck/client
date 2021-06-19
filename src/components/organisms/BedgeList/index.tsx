import React, { ReactElement } from 'react';
import BadgeType from '../../molecules/BadgeType';
import * as S from './style';

const BadgeList = (): ReactElement => {
  // const test:any = [1, 2, 3, 4, 5];
  const test: any = null;

  return (
    <div>
      {test ? (
        <>
          <BadgeType title="탈출 배지" subTitle="탈출 기록을 확인하세요" itemList={test} />
          <BadgeType title="테마 배지" subTitle="테마별 도전기록을 확인하세요" itemList={test} />
          <BadgeType title="2021 프렌차이즈 (한정배지)" subTitle="프렌차이즈의 특별 한정업적" itemList={test} />
        </>
      ) : (
        <S.PTag>획득한 배지가 없습니다.</S.PTag>
      )}
    </div>
  );
};

export default BadgeList;
