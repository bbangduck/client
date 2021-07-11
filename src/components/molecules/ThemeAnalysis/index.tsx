import React, { ReactElement } from 'react';
import useSWR from 'swr';
import { useParams, useHistory } from 'react-router-dom';
import MyPageSubTitle from '../MyPageSubTitle';
import pointMark from '../../../assets/images/pointmark/pointMark.svg';
import * as S from './style';
import ThemeGuide from '../../atoms/ThemeGuide';
import ThemeSmallGraph from '../../organisms/ThemeSmallGraph';
import Loading from '../../atoms/Loading';
import useGetThemeAnalysis from '../../../swr/useGetThemeAnalysis';

interface Props {
  isRef: React.MutableRefObject<HTMLElement | null>;
}
const ThemeAnalysis = ({ isRef }: Props): ReactElement => {
  const { themeId } = useParams<ParamsTypes>();
  const { data, loading } = useGetThemeAnalysis(themeId);

  if (loading) return <Loading />;
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
      <ThemeSmallGraph pushTo="/theme/:name/analysis" graph={data} />
    </S.Section>
  );
};

export default ThemeAnalysis;
