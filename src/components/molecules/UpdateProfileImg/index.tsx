import React, { ReactElement } from 'react';
import * as S from './style';
import defaultImg from '../../../assets/images/profile/profile.png';
import camera from '../../../assets/images/camera/camera.png';

const UpdateProfileImg = (): ReactElement => {
  const myImage = null;

  const updateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const file = e.target.files[0].name;
      const imageType = e.target.files[0].type;
      const formData = new FormData();
      console.log(e.target.files[0]);
      // formData.append('files', file);
      // formData.append('type', imageType);
      // console.log(formData.get('files'));
      // console.log(formData.get('type'));
    }
  };

  return (
    <S.Container>
      <img src={myImage || defaultImg} alt="프로필사진" />
      <S.IconBox htmlFor="profile-upload">
        <img src={camera} alt="사진 불러오기" />
        <S.FileUpload type="file" id="profile-upload" onChange={updateImage} accept="image/*" />
      </S.IconBox>
    </S.Container>
  );
};

export default UpdateProfileImg;
