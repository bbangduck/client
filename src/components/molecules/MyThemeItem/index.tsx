import React, { ReactElement } from 'react';
import more from '../../../assets/images/more/moreWhite.png';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';

interface Props {
  onMoreClick: () => void;
}
const MyThemeItem = ({ onMoreClick }: Props): ReactElement => {
  const onClick = () => {
    onMoreClick();
  };

  return (
    <S.Li>
      <S.ImgBox image={poster}>
        <S.MoreBox onClick={onClick}>
          <img src={more} alt="삭제 버튼" />
        </S.MoreBox>
      </S.ImgBox>
      <S.PTag>검은 사원</S.PTag>
      <S.Span>제로월드 강남점</S.Span>
    </S.Li>
  );
};

export default MyThemeItem;
