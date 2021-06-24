import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewThemeItem from '../../molecules/NewThemeItem';
import poster from '../../../assets/images/test/poster.jpg';
import poster2 from '../../../assets/images/test/me.jpg';
import 'swiper/swiper.scss';
import './style.css';
import * as S from './style';

const MainNewThemes = (): ReactElement => {
  return (
    <S.Section>
      <S.H2>이번달 신규테마</S.H2>
      <Swiper spaceBetween={16} slidesPerView="auto">
        <ul>
          <SwiperSlide className="newTheme-swiper">
            <NewThemeItem image={poster} />
          </SwiperSlide>
          <SwiperSlide className="newTheme-swiper">
            <NewThemeItem image={poster2} />
          </SwiperSlide>
          <SwiperSlide className="newTheme-swiper">
            <NewThemeItem image={poster} />
          </SwiperSlide>
          <SwiperSlide className="newTheme-swiper">
            <NewThemeItem image={poster2} />
          </SwiperSlide>
        </ul>
      </Swiper>
    </S.Section>
  );
};

export default MainNewThemes;
