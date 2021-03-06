import React, { ReactElement } from 'react';
import * as S from './style';
import ProfileImg from '../../atoms/ProfileImg';
import defaultImg from '../../../assets/images/profile/profile.png';
import useGetUserData from '../../../swr/useGetUserData';
import Loading from '../../atoms/Loading';

const MyInfo = (): ReactElement => {
  const { data, loading } = useGetUserData();

  const nickname = data?.nickname;
  const profileImg = data?.profileImage?.profileImageUrl;
  const reviewCount = data?.roomEscapeStatus?.challengesCount;
  const level = '없음';

  if (loading) return <Loading />;
  return (
    <S.Container>
      <ProfileImg image={profileImg || defaultImg} width={80} height={80} marginRight={20} />
      <S.RightBox>
        <S.NamePTag>{nickname}</S.NamePTag>
        <S.LevelPTag>
          LEVEL {level} / {reviewCount}개의 리뷰
        </S.LevelPTag>
      </S.RightBox>
    </S.Container>
  );
};

export default MyInfo;
