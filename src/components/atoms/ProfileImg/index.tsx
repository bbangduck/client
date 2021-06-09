import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  image: string;
  width: number;
  height: number;
  marginRight: number;
}
const ProfileImg = ({ image, width, height, marginRight }: Props): ReactElement => {
  return <S.Img image={image} width={width} height={height} marginRight={marginRight} />;
};

export default ProfileImg;
