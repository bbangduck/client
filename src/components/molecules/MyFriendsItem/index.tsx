import React, { ReactElement } from 'react';
import image from '../../../assets/images/test/me.jpg';
import more from '../../../assets/images/more/more.png';
import * as S from './style';

interface Props {
  onMoreClick: () => void;
}
const MyFriendsItem = ({ onMoreClick }: Props): ReactElement => {
  const contents = '탠커/즐겜러/스토리 덕후입니다 1줄이상입니다';
  const checkIntroLength = (content: string): string => {
    if (content.length > 20) {
      const newContent = `${content.substr(0, 20)}...`;
      return newContent;
    }
    return content;
  };

  const onMoreClickHandeler = () => {
    onMoreClick();
  };

  return (
    <S.Li>
      <S.LeftBox>
        <S.ImgBox image={image} />
        <div>
          <S.Name>제로월드 강남점</S.Name>
          <S.Intro>{checkIntroLength(contents)}</S.Intro>
          <S.Box>
            <S.PlayCount>나와 5회 탈출</S.PlayCount>
          </S.Box>
        </div>
      </S.LeftBox>
      <S.Img src={more} alt="친구 관리" onClick={onMoreClick} />
    </S.Li>
  );
};

export default MyFriendsItem;
