import React, { ReactElement } from 'react';
import InfoBox from '../../atoms/InfoBox';
import * as S from './style';

const TendencyIntro = (): ReactElement => {
  return (
    <S.Section>
      <S.ImgBox>
        <img src="" alt="내 캐릭터" />
      </S.ImgBox>
      <S.PTag>&apos;공포를 즐길줄 아는 극 탱커&apos;</S.PTag>
      <S.Ul>
        <InfoBox content="#공포" bgColor="#f4f4f9" color="#151950" marginRight={4} borderRadius={4} marginLeft={4} />
        <InfoBox content="#스릴러" bgColor="#f4f4f9" color="#151950" marginRight={4} borderRadius={4} marginLeft={4} />
        <InfoBox
          content="#미스터리"
          bgColor="#f4f4f9"
          color="#151950"
          marginRight={4}
          borderRadius={4}
          marginLeft={4}
        />
        <InfoBox content="#드라마" bgColor="#f4f4f9" color="#151950" marginRight={4} borderRadius={4} marginLeft={4} />
      </S.Ul>
    </S.Section>
  );
};

export default TendencyIntro;
