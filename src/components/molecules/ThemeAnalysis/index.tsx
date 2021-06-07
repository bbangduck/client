import React, { ReactElement } from 'react';
import MyPageSubTitle from '../MyPageSubTitle';
import pointMark from '../../../assets/images/pointmark/pointMark.png';
import * as S from './style';
import ThemeGuide from '../../atoms/ThemeGuide';
import ThemeSmallGraph from '../../organisms/ThemeSmallGraph';

interface Props {
  isRef: React.MutableRefObject<HTMLElement | null>;
}
const ThemeAnalysis = ({ isRef }: Props): ReactElement => {
  return (
    <S.Section ref={isRef}>
      <MyPageSubTitle content="테마 분석" trueMargin="4px" />
      <ThemeGuide
        pointMark={pointMark}
        content="빵덕 회원의 리뷰를 통해 수집된 사용자 경험입니다."
        subContent="테마의 공식정보와 일치하지 않을수도 있습니다."
        bgColor="#f6f6f6"
        color="#9c9c9c"
      />
      <ThemeSmallGraph pushTo="/theme/:name/analysis" />
    </S.Section>
  );
};

export default ThemeAnalysis;
