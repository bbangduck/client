import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import PickItem from '../../molecules/PickItem';
import 'swiper/swiper.scss';
import './style.css';
import 'swiper/components/pagination/pagination.scss';
import * as S from './style';

const Picks = (): ReactElement => {
  SwiperCore.use([Pagination]);

  return (
    <S.Article>
      <S.H2>빵덕&apos;s PICK</S.H2>
      <Swiper spaceBetween={20} pagination={{ clickable: true }}>
        <ul>
          <SwiperSlide>
            <PickItem />
          </SwiperSlide>
          <SwiperSlide>
            <PickItem />
          </SwiperSlide>
          <SwiperSlide>
            <PickItem />
          </SwiperSlide>
          <SwiperSlide>
            <PickItem />
          </SwiperSlide>
        </ul>
      </Swiper>
    </S.Article>
  );
};

export default Picks;
