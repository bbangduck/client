import React, { ReactElement, useState } from 'react';
import ReviewSwiper from '../ReviewSwiper';
import StarBox from '../../atoms/StarBox';
import StatusBlock from '../../atoms/StatusBlock';
import down from '../../../assets/images/arrow/down.png';
import * as S from './style';
import ReviewMoreInfo from '../../molecules/ReviewMoreInfo';
import { shortSentence } from '../../../hooks/shortSentence';

const ReviewItemRight = (): ReactElement => {
  const [moreOn, setMoreOn] = useState(false);

  const name = '닉네임 넘어가면 이렇게 해야하나요';
  const review =
    '김포점에서 같은 테마 한번 해보고 강남에 새로 생겼다 길래 도전해봤는데 스토리가 정말 재미있다 하하하하';

  return (
    <S.Container>
      <S.TopBox>
        <S.NameBox>
          <S.Name>{shortSentence(13, name)}</S.Name>
          <S.Brief>LEVEL 3 / 5개의 리뷰</S.Brief>
        </S.NameBox>
        <S.Date>2020년 2월 1일</S.Date>
      </S.TopBox>
      <S.Boxes>
        <StarBox star={2} />
        <StatusBlock content="NO HINT" color="#4b4b4b" border padding={12} />
        <StatusBlock content="56:32:11" color="#4b4b4b" border padding={16} />
      </S.Boxes>
      <S.ReviewContent>
        {moreOn ? review : shortSentence(49, review)}
        {moreOn ? null : (
          <S.MoreBox onClick={() => setMoreOn(true)}>
            <S.More>More</S.More>
            <img src={down} alt="더보기" />
          </S.MoreBox>
        )}
      </S.ReviewContent>
      <ReviewSwiper />
      {moreOn ? <ReviewMoreInfo /> : null}
    </S.Container>
  );
};

export default ReviewItemRight;
