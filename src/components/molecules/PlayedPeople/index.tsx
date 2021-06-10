import React, { ReactElement } from 'react';
import ProfileImg from '../../atoms/ProfileImg';
import defaultImg from '../../../assets/images/profile/profile.png';
import * as S from './style';

const PlayedPeople = (): ReactElement => {
  return (
    <S.Container>
      <S.Images>
        <ProfileImg image={defaultImg} width={40} height={40} />
        <S.ImgBox2>
          <ProfileImg image={defaultImg} width={40} height={40} />
        </S.ImgBox2>
        <S.ImgBox3>
          <ProfileImg image={defaultImg} width={40} height={40} />
        </S.ImgBox3>
      </S.Images>
      <S.PTag>
        &quot;<S.Span>40명</S.Span>의 빵덕이 플레이했어요&quot;
      </S.PTag>
    </S.Container>
  );
};

export default PlayedPeople;
