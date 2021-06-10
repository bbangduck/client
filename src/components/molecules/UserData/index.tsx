import React, { ReactElement } from 'react';
import image from '../../../assets/images/test/me.jpg';
import { shortSentence } from '../../../hooks/shortSentence';
import ProfileImg from '../../atoms/ProfileImg';
import * as S from './style';

const UserData = (): ReactElement => {
  const contents = '탠커/즐겜러/스토리 덕후입니다 1줄이상입니다';

  return (
    <S.Containter>
      <ProfileImg image={image} width={40} height={40} marginRight={10} />
      <S.ContentBox>
        <S.Title>제로월드 강남점</S.Title>
        <S.Intro>{shortSentence(20, contents)}</S.Intro>
        <S.Box>나와 5회 탈출</S.Box>
      </S.ContentBox>
    </S.Containter>
  );
};

export default UserData;
