import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import defaultImg from '../../../assets/images/profile/profile.png';
import camera from '../../../assets/images/camera/camera.png';
import axiosAPI from '../../../utils/axios';
import useGetUserData from '../../../swr/useGetUserData';
import Loading from '../../atoms/Loading';
import usePopAlarm from '../../../hooks/usePopAlarm';

const UpdateProfileImg = (): ReactElement => {
  const history = useHistory();
  const { data, loading, mutate: mutateImg } = useGetUserData();
  const [popoAlarm] = usePopAlarm();

  const myImage = data?.profileImage?.profileImageUrl;

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
      const { fileId } = response.data[0];
      const { fileName } = response.data[0];
      const userId = sessionStorage.getItem('bbangUserId');

      await axiosAPI({
        method: 'put',
        url: `/api/members/${userId}/profiles/images`,
        data: {
          fileStorageId: fileId,
          fileName,
        },
      });
      await mutateImg();
    } catch (error) {
      if (error.response.data.status === 2408) {
        popoAlarm('올바른 파일이 아닙니다.');
      }
      history.push('/error');
    }
  };

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      console.log(uploadFile);
      const formData = new FormData();
      formData.append('files', uploadFile);

      uploadImage(formData);
    }
    e.target.files = null;
  };

  if (loading) return <Loading />;
  return (
    <S.Container>
      <S.Img image={myImage || defaultImg} />
      <S.IconBox data-blink="cover">
        <img src={camera} alt="사진 불러오기" data-blink="cover" />
        <S.FileUpload type="file" id="profile-upload-file" onInput={onChangeImg} accept="image/*" data-blink="cover" />
      </S.IconBox>
    </S.Container>
  );
};

export default UpdateProfileImg;
