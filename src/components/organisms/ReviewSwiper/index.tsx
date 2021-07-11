import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import test from '../../../assets/images/test/poster.jpg';
import test2 from '../../../assets/images/test/me.jpg';
import 'swiper/swiper.scss';
import './style.css';
import * as S from './style';

interface Props {
  playTogetherFriends: {
    memberId: number;
    nickname: string;
    profileImageUrl: string | null;
    profileImageThumbnailUrl: string | null;
  }[];
}
const ReviewSwiper = ({ playTogetherFriends }: Props): ReactElement => {
  return (
    <S.Container>
      <Swiper slidesPerView="auto" spaceBetween={12} grabCursor>
        {playTogetherFriends?.map((friend) => {
          if (friend.profileImageThumbnailUrl) {
            return (
              <SwiperSlide className="theme-review-slide" key={friend.memberId}>
                <S.ImgBox image={friend.profileImageThumbnailUrl} />
              </SwiperSlide>
            );
          }
          return null;
        })}
      </Swiper>
    </S.Container>
  );
};

export default ReviewSwiper;
