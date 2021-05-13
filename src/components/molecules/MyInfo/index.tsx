import React, { ReactElement } from 'react';
import * as S from './style';
import ProfileImg from '../../atoms/ProfileImg';

const MyInfo = (): ReactElement => {
  const name = '방탈출 초보 방린이';
  const level = 3;
  const review = 5;

  return (
    <S.Container>
      <ProfileImg />
      <S.RightBox>
        <S.NamePTag>{name}</S.NamePTag>
        <S.LevelPTag>
          LEVEL {level} / {review}개의 리뷰
        </S.LevelPTag>
      </S.RightBox>
    </S.Container>
  );
};

export default MyInfo;
