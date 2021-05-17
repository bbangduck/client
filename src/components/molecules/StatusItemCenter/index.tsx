import React, { ReactElement } from 'react';
import StarBox from '../../atoms/StarBox';
import StatusBlock from '../../atoms/StatusBlock';
import * as S from './style';

interface Props {
  detailExist: boolean;
  title: string;
  location: string;
  star: number;
  time: string;
  hint: number;
}
const StatusItemCenter = ({ detailExist, title, location, star, time, hint }: Props): ReactElement => {
  return (
    <S.Container detailExist={detailExist}>
      <S.ImgBox>
        <img src="" alt="" />
      </S.ImgBox>
      <S.RightBox>
        <S.Top>
          <S.PTag>{title}</S.PTag>
          <S.Location>{location}</S.Location>
        </S.Top>
        <S.Bottom>
          <StarBox star={star} />
          <StatusBlock content={`${hint || `NO`} HINT`} border color="#4b4b4b" padding={12} />
          <StatusBlock content={time} border color="#4b4b4b" padding={16} />
        </S.Bottom>
      </S.RightBox>
    </S.Container>
  );
};

export default StatusItemCenter;
