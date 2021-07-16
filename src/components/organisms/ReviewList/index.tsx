import React, { ReactElement } from 'react';
import { ReviewContentType } from '../../../swr/useReviewInfinite';
import ReviewItem from '../ReviewItem';

interface Props {
  data: ReviewContentType | undefined;
}
const ReviewList = ({ data }: Props): ReactElement => {
  console.log(data);
  return (
    <ul>
      {data?.map((item) => {
        const {
          reviewId,
          writerInfo,
          registerTimes,
          rating,
          hintUsageCount,
          themeClearTime,
          comment,
          playTogetherFriends,
          like,
          likeCount,
          perceivedThemeGenres,
          reviewImages,
        } = item;
        const { nickname, profileImageThumbnailUrl } = writerInfo;
        const filteredDate = registerTimes.split('T')[0].split('-');
        const registerDate = `${filteredDate[0]}년 ${filteredDate[1]}월 ${filteredDate[2]}일`;
        return (
          <ReviewItem
            key={reviewId}
            imageUrl={profileImageThumbnailUrl}
            nickname={nickname}
            registerDate={registerDate}
            rating={rating}
            hintUsageCount={hintUsageCount}
            themeClearTime={themeClearTime}
            comment={comment}
            playTogetherFriends={playTogetherFriends}
            like={like}
            likeCount={likeCount}
            perceivedThemeGenres={perceivedThemeGenres}
            reviewImages={reviewImages}
          />
        );
      })}
    </ul>
  );
};

export default ReviewList;
