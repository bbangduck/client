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
}
const StatusItemCenter = ({ detailExist, title, location, star, time }: Props): ReactElement => {
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
          <S.HintBox>
            <S.Hint>NO HINT</S.Hint>
          </S.HintBox>
          <StatusBlock content={time} border color="#4b4b4b" />
        </S.Bottom>
      </S.RightBox>
    </S.Container>
  );
};

export default StatusItemCenter;
