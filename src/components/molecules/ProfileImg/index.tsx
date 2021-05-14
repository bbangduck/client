import React, { ReactElement } from 'react';
import * as S from './style';
import defaultImg from '../../../assets/images/profile/profile.png';
import camera from '../../../assets/images/camera/camera.png';

const ProfileImg = (): ReactElement => {
  const myImage = null;

  return (
    <S.Container>
      <img src={myImage || defaultImg} alt="프로필사진" />
      <S.IconBox>
        <img src={camera} alt="사진 불러오기" />
      </S.IconBox>
    </S.Container>
  );
};

export default ProfileImg;
