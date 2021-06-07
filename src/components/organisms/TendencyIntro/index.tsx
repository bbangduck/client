import React, { ReactElement } from 'react';
import HashBox from '../../atoms/HashBox';
import * as S from './style';

const TendencyIntro = (): ReactElement => {
  return (
    <S.Section>
      <S.ImgBox>
        <img src="" alt="내 캐릭터" />
      </S.ImgBox>
      <S.PTag>&apos;공포를 즐길줄 아는 극 탱커&apos;</S.PTag>
      <S.Ul>
        <HashBox tendency="공포" bgColor="#f4f4f9" color="#151950" leftMargin="4px" rightMargin="4px" />
        <HashBox tendency="스릴러" bgColor="#f4f4f9" color="#151950" leftMargin="4px" rightMargin="4px" />
        <HashBox tendency="미스터리" bgColor="#f4f4f9" color="#151950" leftMargin="4px" rightMargin="4px" />
        <HashBox tendency="공포" bgColor="#f4f4f9" color="#151950" leftMargin="4px" rightMargin="4px" />
      </S.Ul>
    </S.Section>
  );
};

export default TendencyIntro;
