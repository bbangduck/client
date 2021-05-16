import React, { ReactElement } from 'react';
import MyPageSubTitle from '../MyPageSubTitle';
import pointMark from '../../../assets/images/pointmark/pointMark.png';
import * as S from './style';

const ThemeAnalysis = (): ReactElement => {
  return (
    <S.Section>
      <MyPageSubTitle content="테마 분석" trueMargin="4px" falseMargin="0px" />
      <S.Box>
        <S.Img src={pointMark} alt="강조" />
        <S.PTag>
          빵덕 회원의 리뷰를 통해 수집된 사용자 경험입니다.
          <br />
          테마의 공식정보와 일치하지 않을수도 있습니다.
        </S.PTag>
      </S.Box>
      <S.Blank />
    </S.Section>
  );
};

export default ThemeAnalysis;
