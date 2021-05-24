import React, { ReactElement } from 'react';
import * as S from './style';
import defaultImg from '../../../assets/images/profile/profile.png';
import camera from '../../../assets/images/camera/camera.png';

const UpdateProfileImg = (): ReactElement => {
  const myImage = null;

  const updateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  return (
    <S.Container>
      <img src={myImage || defaultImg} alt="프로필사진" />
      <S.IconBox htmlFor="profile-upload">
        <img src={camera} alt="사진 불러오기" />
        <S.FileUpload type="file" id="profile-upload" onChange={updateImage} />
      </S.IconBox>
    </S.Container>
  );
};

export default UpdateProfileImg;
