import React, { ReactElement } from 'react';
import InfoBox from '../../atoms/InfoBox';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';

const ReviewDetailInfo = (): ReactElement => {
  return (
    <S.Container>
      <S.ImgBox image={poster} />
      <div>
        <S.H1>[제로월드 강남] 검은사원</S.H1>
        <S.PTag>제로월드 강남점</S.PTag>
        <S.Box>
          <InfoBox content="스릴러" bgColor="#f4f4f9" color="#151950" marginRight={4} borderRadius={4} />
          <InfoBox content="스릴러" bgColor="#f4f4f9" color="#151950" marginRight={4} borderRadius={4} />
        </S.Box>
      </div>
      <S.Line />
    </S.Container>
  );
};

export default ReviewDetailInfo;
