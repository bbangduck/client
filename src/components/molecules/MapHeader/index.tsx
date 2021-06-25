import React, { ReactElement } from 'react';
import marker from '../../../assets/images/location/markerBlack.svg';
import arrow from '../../../assets/images/arrow/down.svg';
import * as S from './style';

const MapHeader = (): ReactElement => {
  return (
    <S.Container>
      <img src={marker} alt="내위치" />
      <S.PTag>서울 서초동</S.PTag>
      <img src={arrow} alt="" />
    </S.Container>
  );
};

export default MapHeader;
