import React, { ReactElement } from 'react';
import * as S from './style';
import iconx1 from '../../../assets/images/profile/profile.png';

interface Props {
  img?: string;
}
const ProfileImg = ({ img }: Props): ReactElement => {
  return <S.Img src={img || iconx1} alt="profileImage" />;
};

export default ProfileImg;
