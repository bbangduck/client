import React, { ReactElement, useState } from 'react';
import { shortSentence } from '../../../hooks/shortSentence';
import StarBox from '../../atoms/StarBox';
import StatusBlock from '../../atoms/StatusBlock';
import * as S from './style';
import defaultImg from '../../../assets/images/profile/profile.png';
import down from '../../../assets/images/arrow/down.svg';
import ReviewSwiper from '../ReviewSwiper';
import ReviewMoreInfo from '../../molecules/ReviewMoreInfo';

interface Props {
  imageUrl: string | null;
  nickname: string;
  registerDate: string;
  rating: number;
  hintUsageCount: string;
  themeClearTime: string;
  comment?: string;
  reviewImages?: {
    reviewImageId: number;
    reviewImageThumbnailUrl: string;
    reviewImageUrl: string;
  }[];
  sequenceCondition: string;
  // playTogetherFriends: {
  //   memberId: number;
  //   nickname: string;
  //   profileImageUrl: string | null;
  //   profileImageThumbnailUrl: string | null;
  // }[];
  reviewId: number;
  like: boolean;
  likeCount: number;
  perceivedThemeGenres: {
    genreId: number;
    genreCode: string;
    genreName: string;
  }[];
}
const ReviewItem = ({
  imageUrl,
  nickname,
  registerDate,
  rating,
  hintUsageCount,
  themeClearTime,
  comment,
  reviewId,
  like,
  likeCount,
  perceivedThemeGenres,
  reviewImages,
  sequenceCondition,
}: Props): ReactElement => {
  const [moreOn, setMoreOn] = useState(false);
  const filterHint = (): string | undefined => {
    if (hintUsageCount === 'NONE') return 'NO HINT';
    if (hintUsageCount === 'ONE') return 'HINT 1';
    if (hintUsageCount === 'TWO') return 'HINT 2';
    if (hintUsageCount === 'THREE_OR_MORE') return 'HINT 3+';
    return undefined;
  };
  return (
    <S.Li>
      <S.TopBox>
        <S.Img src={imageUrl || defaultImg} alt="프로필 사진" />
        <S.RightBox>
          <S.Box>
            <S.Nickname>{shortSentence(13, nickname)}</S.Nickname>
            <S.Level>LEVEL 3 / 5개의 리뷰 </S.Level>
          </S.Box>
          <S.Date>{registerDate}</S.Date>
        </S.RightBox>
      </S.TopBox>
      <S.SqureBoxs>
        <StarBox star={rating} />
        <StatusBlock content={filterHint()} color="#4b4b4b" border padding={12} />
        {themeClearTime ? <StatusBlock content={themeClearTime} color="#4b4b4b" border padding={16} /> : null}
      </S.SqureBoxs>
      <S.ReviewContent>
        {moreOn ? comment : shortSentence(49, comment || '')}
        {moreOn || !comment || (comment && comment.length < 49 && comment.length > 0) ? null : (
          <S.MoreBox onClick={() => setMoreOn(true)} data-blink="blink">
            <S.More data-blink="blink">More</S.More>
            <img src={down} alt="더보기" data-blink="blink" />
          </S.MoreBox>
        )}
      </S.ReviewContent>
      <ReviewSwiper reviewImages={reviewImages} />
      <ReviewMoreInfo
        reviewId={reviewId}
        moreOn={moreOn}
        like={like}
        likeCount={likeCount}
        perceivedThemeGenres={perceivedThemeGenres}
        sequenceCondition={sequenceCondition}
      />
    </S.Li>
  );
};

export default ReviewItem;
