import React, { ReactElement } from 'react';
import * as S from './style';
import ReviewItemRight from '../ReviewItemRight';
import ProfileImg from '../../atoms/ProfileImg';
import defaultImg from '../../../assets/images/profile/profile.png';

const ReviewItem = (): ReactElement => {
  return (
    <S.Li>
      <ProfileImg image={defaultImg} width={40} height={40} marginRight={8} />
      <ReviewItemRight />
    </S.Li>
  );
};

export default ReviewItem;
