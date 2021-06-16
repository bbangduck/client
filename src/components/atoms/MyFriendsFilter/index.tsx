import React, { ReactElement } from 'react';
import * as S from './style';

const MyFriendsFilter = (): ReactElement => {
  return (
    <S.Container>
      <S.Box data-blink="blink">
        <S.PTag data-blink="blink">오래된 순</S.PTag>
        <S.ImgBox data-blink="blink">
          <img src="" alt="" />
        </S.ImgBox>
      </S.Box>
    </S.Container>
  );
};

export default MyFriendsFilter;
