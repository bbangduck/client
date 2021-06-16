import React, { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router-dom';
import plus from '../../../assets/images/plus/plus.png';
import poster from '../../../assets/images/test/poster.jpg';
import { shortSentence } from '../../../hooks/shortSentence';
import ProfileImg from '../../atoms/ProfileImg';
import 'swiper/swiper.scss';
import * as S from './style';
import './style.css';

const ReviewChooseFriend = (): ReactElement => {
  const history = useHistory();
  const onAddFriend = () => {
    history.push('/theme/friends');
  };

  return (
    <S.Container>
      <S.TitleBox>
        <S.PTag>같이한 친구 (선택)</S.PTag>
        {/* <S.Box>
          <S.CountBox onClick={onMinusClick}>
            <img src={minus} alt="같이할 친구 인원 빼기" />
          </S.CountBox>
          <S.Span>{countState}</S.Span>
          <S.CountBox onClick={() => setCountState((prev) => prev + 1)}>
            <img src={plus} alt="같이할 친구 인원 추가" />
          </S.CountBox>
        </S.Box> */}
      </S.TitleBox>
      <S.FriendsBox>
        <Swiper spaceBetween={0} slidesPerView="auto" className="friends-swiper">
          <SwiperSlide className="friends-slide">
            <S.ProfileBox>
              <ProfileImg image={poster} width={68} height={68} />
              <S.Span2>{shortSentence(5, '방달출초보다')}</S.Span2>
            </S.ProfileBox>
          </SwiperSlide>
          <SwiperSlide className="friends-slide">
            <S.NoImg onClick={onAddFriend} data-blink="blink">
              <img src={plus} alt="친구 추가" data-blink="blink" />
            </S.NoImg>
          </SwiperSlide>
        </Swiper>
      </S.FriendsBox>
    </S.Container>
  );
};

export default React.memo(ReviewChooseFriend);
