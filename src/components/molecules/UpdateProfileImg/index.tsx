import React, { ReactElement } from 'react';
import axios from 'axios';
import * as S from './style';
import defaultImg from '../../../assets/images/profile/profile.png';
import camera from '../../../assets/images/camera/camera.png';
import axiosAPI from '../../../utils/axios';

const UpdateProfileImg = (): ReactElement => {
  const myImage = null;

  const updateImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();
      formData.append('files', uploadFile);
      // console.log(formData);
      try {
        const response = await axiosAPI({
          method: 'post',
          url: '/api/files/images',
          data: formData,
        });

        const { fileId } = response.data.data[0];
        const { fileName } = response.data.data[0];
        const userId = sessionStorage.getItem('bbangUserId');
        const res = await axiosAPI({
          method: 'put',
          url: `/api/members/${userId}/profiles/images`,
          data: {
            fileStorageId: fileId,
            fileName,
          },
        });
        console.log(res);
      } catch (err) {
        console.log(err.response);
      }
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
