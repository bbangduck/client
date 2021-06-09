import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewThemeItem from '../../molecules/NewThemeItem';
import 'swiper/swiper.scss';
import * as S from './style';

const MainNewThemes = (): ReactElement => {
  return (
    <S.Section>
      <S.H2>이번달 신규테마</S.H2>
      <Swiper spaceBetween={-68}>
        <ul>
          <SwiperSlide>
            <NewThemeItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewThemeItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewThemeItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewThemeItem />
          </SwiperSlide>
        </ul>
      </Swiper>
    </S.Section>
  );
};

export default MainNewThemes;