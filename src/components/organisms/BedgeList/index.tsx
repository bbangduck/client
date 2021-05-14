import React, { ReactElement } from 'react';
import BadgeType from '../../molecules/BadgeType';

const BadgeList = (): ReactElement => {
  return (
    <div>
      <BadgeType title="탈출 배지" subTitle="탈출 기록을 확인하세요" itemList={[1, 2, 3, 4, 5, 6]} />
      <BadgeType title="테마 배지" subTitle="테마별 도전기록을 확인하세요" itemList={[1, 2, 3]} />
      <BadgeType title="2021 프렌차이즈 (한정배지)" subTitle="프렌차이즈의 특별 한정업적" itemList={[1, 2, 3]} />
    </div>
  );
};

export default BadgeList;
