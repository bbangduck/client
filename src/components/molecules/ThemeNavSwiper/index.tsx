import React, { ReactElement, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './style.css';
import * as S from './style';

const ThemeNavSwiper = (): ReactElement => {
  const [currentItem, setCurrentItem] = useState(1);

  const listTest = [
    { id: 1, name: '전체' },
    { id: 2, name: '공포' },
    { id: 3, name: '스릴러' },
    { id: 4, name: '미스터리' },
    { id: 5, name: 'SF' },
    { id: 6, name: '로맨스' },
    { id: 7, name: '범죄' },
  ];

  const onClickItem = (currentId: number) => {
    listTest.forEach((item) => {
      if (item.id === currentId) {
        setCurrentItem(currentId);
      }
    });
  };

  return (
    <S.Container>
      <Swiper spaceBetween={0} slidesPerView="auto" id="theme-nav-swiper">
        {listTest.map((item) => (
          <SwiperSlide key={item.id} onClick={() => onClickItem(item.id)} id="theme-nav-slides">
            <S.PTag clicked={currentItem === item.id}>{item.name}</S.PTag>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default ThemeNavSwiper;
