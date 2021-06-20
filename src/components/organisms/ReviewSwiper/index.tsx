import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './style.css';
import * as S from './style';

const ReviewSwiper = (): ReactElement => {
  return (
    <S.Container>
      <Swiper slidesPerView="auto" spaceBetween={0} grabCursor>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox />
        </SwiperSlide>
      </Swiper>
    </S.Container>
  );
};

export default ReviewSwiper;
