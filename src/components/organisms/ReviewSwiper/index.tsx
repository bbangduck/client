import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import * as S from './style';

const ReviewSwiper = (): ReactElement => {
  return (
    <S.Container>
      <Swiper spaceBetween={-10} slidesPerView={3.5}>
        <SwiperSlide>
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide>
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide>
          <S.ImgBox />
        </SwiperSlide>
        <SwiperSlide>
          <S.ImgBox />
        </SwiperSlide>
      </Swiper>
    </S.Container>
  );
};

export default ReviewSwiper;
