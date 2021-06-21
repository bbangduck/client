import React, { ReactElement } from 'react';
import InfoBox from '../../atoms/InfoBox';
import test from '../../../assets/images/test/poster.jpg';
import test2 from '../../../assets/images/test/me.jpg';
import * as S from './style';

const StatusItemBottom = (): ReactElement => {
  const content = '어려움';

  return (
    <div>
      <S.PTag>
        김포점에서 같은 테마 한번 해보고 강남에 새로 생겼다길래 도전해봤는데 스토리가 약간 달라서 재밌었어요 ㅎㅎ 확실히
        새로 생긴데라 그런지 시설은 더 좋았던 것 같아요!
      </S.PTag>
      <S.Ul>
        <S.Li>
          <S.Img src={test} alt="" />
        </S.Li>
        <S.Li>
          <S.Img src={test2} alt="" />
        </S.Li>
        <S.Li>
          <S.Img src={test} alt="" />
        </S.Li>
        <S.Li>
          <S.Img src={test2} alt="" />
        </S.Li>
      </S.Ul>
      <S.HashBox>
        <InfoBox
          content={`#${content}`}
          bgColor="#f4f4f9"
          color="#9c9c9c"
          marginRight={9}
          marginBottom={8}
          borderRadius={4}
        />
      </S.HashBox>
    </div>
  );
};

export default StatusItemBottom;
