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
      <Swiper spaceBetween={20} pagination={{ clickable: true }} className="picks-swiper">
        <ul>
          <SwiperSlide className="pick-slides">
            <PickItem
              titleColor="#ffffff"
              title="제로월드 서현점"
              address="서울 서초동 930번지 34"
              themeAccount={8}
              boxBgColor="#ffffff"
              boxColor="#2b2b2b"
              addressColor="#9c9c9c"
              themeColor="#9c9c9c"
              themeCountColor="#ffffff"
              borderColor="#9c9c9c"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PickItem
              titleColor="#ffffff"
              title="제로월드 서현점"
              address="서울 서초동 930번지 34"
              themeAccount={8}
              boxBgColor="#ffffff"
              boxColor="#2b2b2b"
              addressColor="#9c9c9c"
              themeColor="#9c9c9c"
              themeCountColor="#ffffff"
              borderColor="#9c9c9c"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PickItem
              titleColor="#ffffff"
              title="제로월드 서현점"
              address="서울 서초동 930번지 34"
              themeAccount={8}
              boxBgColor="#ffffff"
              boxColor="#2b2b2b"
              addressColor="#9c9c9c"
              themeColor="#9c9c9c"
              themeCountColor="#ffffff"
              borderColor="#9c9c9c"
            />
          </SwiperSlide>
        </ul>
      </Swiper>
    </S.Article>
  );
};

export default Picks;
