import React, { ReactElement } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import more from '../../../assets/images/more/more2.png';
import left from '../../../assets/images/arrow/whiteLeft.png';
import * as S from './style';
import StarBox from '../../atoms/StarBox';
import StatusBlock from '../../atoms/StatusBlock';
import map from '../../../assets/images/map/map.png';
import InfoBox from '../../atoms/InfoBox';

const ThemeHeader = (): ReactElement => {
  return (
    <>
      <S.Bg />
      <S.Header>
        <UpdateHeader img={more} arrow={left} />
        <S.Container>
          <S.TotalBox>
            <S.LeftBox>
              <StarBox star={4.5} shadow />
              <StatusBlock content="EVENT" color="#2b2b2b" border={false} padding={12} bgColor="white" shadow />
            </S.LeftBox>
            <S.MapBox>
              <img src={map} alt="" />
            </S.MapBox>
          </S.TotalBox>
          <S.H1Tag>[강남] 제로호텔L</S.H1Tag>
          <S.H2Tag>제로월드 강남점</S.H2Tag>
          <S.DetailBox>
            <InfoBox content="스릴러" bgColor="#f4f4f9" color="#151950" marginRight={4} />
            <InfoBox content="스릴러" bgColor="#f4f4f9" color="#151950" marginRight={4} />
          </S.DetailBox>
        </S.Container>
      </S.Header>
    </>
  );
};

export default ThemeHeader;
