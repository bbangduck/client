import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import defaultImg from '../../../assets/images/profile/profile.png';
import camera from '../../../assets/images/camera/camera.png';
import axiosAPI from '../../../utils/axios';

const UpdateProfileImg = (): ReactElement => {
  const history = useHistory();
  const myImage = null;

  const uploadImage = async (formData: FormData) => {
    try {
      const response = await axiosAPI({
        method: 'post',
        url: '/api/files/images',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { fileId } = response.data.data[0];
      const { fileName } = response.data.data[0];
      const userId = sessionStorage.getItem('bbangUserId');

      await axiosAPI({
        method: 'put',
        url: `/api/members/${userId}/profiles/images`,
        data: {
          fileStorageId: fileId,
          fileName,
        },
      });
    } catch (err) {
      history.push('/error');
    }
  };

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();
      formData.append('files', uploadFile);

      uploadImage(formData);
    }
  };

  return (
    <S.Container>
      <img src={myImage || defaultImg} alt="프로필사진" />
      <S.IconBox htmlFor="profile-upload" data-blink="blink">
        <img src={camera} alt="사진 불러오기" data-blink="blink" />
        <S.FileUpload type="text" id="profile-upload" onChange={onChangeImg} accept="image/*" data-blink="blink" />
      </S.IconBox>
    </S.Container>
  );
};

export default UpdateProfileImg;
