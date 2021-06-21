import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import test from '../../../assets/images/test/poster.jpg';
import test2 from '../../../assets/images/test/me.jpg';
import 'swiper/swiper.scss';
import './style.css';
import * as S from './style';

const ReviewSwiper = (): ReactElement => {
  return (
    <S.Container>
      <Swiper slidesPerView="auto" spaceBetween={12} grabCursor>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox image={test} />
        </SwiperSlide>
        <SwiperSlide className="theme-review-slide">
          <S.ImgBox image={test2} />
        </SwiperSlide>
      </Swiper>
    </S.Container>
  );
};

export default ReviewSwiper;
