import React, { ReactElement } from 'react';
import upDown from '../../../assets/images/arrow/upDown.png';
import * as S from './style';

const MyFriendsFilter = (): ReactElement => {
  return (
    <S.Container>
      <S.Box data-blink="blink">
        <S.PTag data-blink="blink">오래된 순</S.PTag>
        <img src={upDown} alt="친구 필터" data-blink="blink" />
      </S.Box>
    </S.Container>
  );
};

export default MyFriendsFilter;
