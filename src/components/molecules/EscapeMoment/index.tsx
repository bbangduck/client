import React, { ReactElement, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import camera from '../../../assets/images/camera/grayCamera.png';
import deleteImg from '../../../assets/images/delete/deleteGray.png';
import * as S from './style';
import 'swiper/swiper.scss';
import './style.css';

const EscapeMoment = (): ReactElement => {
  const [newImg, setNewImg] = useState<[] | { id: number; img: string }[]>([]);

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const imgFile = e.target.files[0];
      const img = window.URL.createObjectURL(imgFile);
      setNewImg((prev) => {
        if (!prev[0]) return [{ id: 1, img }];

        const nextId = prev[prev.length - 1].id + 1;
        return [...prev, { id: nextId, img }];
      });
    }
  };

  const onDelete = (clickedId: number) => {
    setNewImg((prev) => {
      return prev.filter((prevItem) => prevItem.id !== clickedId);
    });
  };

  return (
    <div>
      <S.PTag>탈출의 순간 (선택)</S.PTag>
      <S.Box>
        <Swiper spaceBetween={0} slidesPerView="auto" id="moment-swiper">
          <SwiperSlide id="moment-slide">
            <S.CameraBox data-blink="blink">
              <S.InputFile type="file" accept="image/*" onChange={onImgChange} data-blink="blink" />
              <img src={camera} alt="사진선택" data-blink="blink" />
            </S.CameraBox>
          </SwiperSlide>
          {newImg.map((item: { id: number; img: string }) => (
            <SwiperSlide key={item.id} id="moment-slide">
              <S.ImgBox image={item.img}>
                <S.Img src={deleteImg} alt="사진삭제" onClick={() => onDelete(item.id)} />
              </S.ImgBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Box>
    </div>
  );
};

export default EscapeMoment;
