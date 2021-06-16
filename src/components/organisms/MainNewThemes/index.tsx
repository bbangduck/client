import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewThemeItem from '../../molecules/NewThemeItem';
import 'swiper/swiper.scss';
import './style.css';
import * as S from './style';

const MainNewThemes = (): ReactElement => {
  return (
    <S.Section>
      <S.H2>이번달 신규테마</S.H2>
      <Swiper spaceBetween={0} slidesPerView="auto">
        <ul>
          <SwiperSlide className="newTheme-swiper">
            <NewThemeItem />
          </SwiperSlide>
          <SwiperSlide className="newTheme-swiper">
            <NewThemeItem />
          </SwiperSlide>
          <SwiperSlide className="newTheme-swiper">
            <NewThemeItem />
          </SwiperSlide>
          <SwiperSlide className="newTheme-swiper">
            <NewThemeItem />
          </SwiperSlide>
        </ul>
      </Swiper>
    </S.Section>
  );
};

export default MainNewThemes;
