import React, { ReactElement, useState } from 'react';
import { shortSentence } from '../../../hooks/shortSentence';
import StarBox from '../../atoms/StarBox';
import StatusBlock from '../../atoms/StatusBlock';
import * as S from './style';
import defaultImg from '../../../assets/images/profile/profile.png';
import down from '../../../assets/images/arrow/down.svg';
import ReviewSwiper from '../ReviewSwiper';
import ReviewMoreInfo from '../../molecules/ReviewMoreInfo';

const ReviewItem = (): ReactElement => {
  const [moreOn, setMoreOn] = useState(false);

  const name = '닉네임 넘어가면 이렇게 해야하나요';
  const review =
    '김포점에서 같은 테마 한번 해보고 강남에 새로 생겼다 길래 도전해봤는데 스토리가 정말 재미있다 하하하하';

  return (
    <S.Li>
      <S.TopBox>
        <S.Img src={defaultImg} alt="프로필 사진" />
        <S.RightBox>
          <S.Box>
            <S.Nickname>{shortSentence(13, name)}</S.Nickname>
            <S.Level>LEVEL 3 / 5개의 리뷰 </S.Level>
          </S.Box>
          <S.Date>2020년 2월 1일</S.Date>
        </S.RightBox>
      </S.TopBox>
      <S.SqureBoxs>
        <StarBox star={2} />
        <StatusBlock content="NO HINT" color="#4b4b4b" border padding={12} />
        <StatusBlock content="56:32:11" color="#4b4b4b" border padding={16} />
      </S.SqureBoxs>
      <S.ReviewContent>
        {moreOn ? review : shortSentence(49, review)}
        {moreOn ? null : (
          <S.MoreBox onClick={() => setMoreOn(true)} data-blink="blink">
            <S.More data-blink="blink">More</S.More>
            <img src={down} alt="더보기" data-blink="blink" />
          </S.MoreBox>
        )}
      </S.ReviewContent>
      <ReviewSwiper />
      <ReviewMoreInfo moreOn={moreOn} />
    </S.Li>
  );
};

export default ReviewItem;
