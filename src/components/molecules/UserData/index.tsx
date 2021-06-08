import React, { ReactElement } from 'react';
import image from '../../../assets/images/test/me.jpg';
import * as S from './style';

const UserData = (): ReactElement => {
  const contents = '탠커/즐겜러/스토리 덕후입니다 1줄이상입니다';
  const checkIntroLength = (content: string): string => {
    if (content.length > 20) {
      const newContent = `${content.substr(0, 20)}...`;
      return newContent;
    }
    return content;
  };

  return (
    <S.Containter>
      <S.ImgBox image={image} />
      <S.ContentBox>
        <S.Title>제로월드 강남점</S.Title>
        <S.Intro>{checkIntroLength(contents)}</S.Intro>
        <S.Box>나와 5회 탈출</S.Box>
      </S.ContentBox>
    </S.Containter>
  );
};

export default UserData;
