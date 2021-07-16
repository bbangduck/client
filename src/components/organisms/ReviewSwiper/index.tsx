import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './style.css';
import * as S from './style';

interface Props {
  reviewImages?: {
    reviewImageId: number;
    reviewImageThumbnailUrl: string;
    reviewImageUrl: string;
  }[];
}
const ReviewSwiper = ({ reviewImages }: Props): ReactElement => {
  return (
    <S.Container>
      <Swiper slidesPerView="auto" spaceBetween={12} grabCursor>
        {reviewImages?.map((img) => {
          if (img.reviewImageThumbnailUrl) {
            return (
              <SwiperSlide className="theme-review-slide" key={img.reviewImageId}>
                <S.ImgBox image={img.reviewImageThumbnailUrl} />
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
