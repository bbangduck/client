import React, { ReactElement } from 'react';
import MyPageSubTitle from '../../molecules/MyPageSubTitle';
import * as S from './style';
import MyPageGuide from '../../atoms/MyPageGuide';
import InfoBox from '../../atoms/InfoBox';
import Loading from '../../atoms/Loading';
import useGetGenre from '../../../swr/useGetGenre';

const EscapeTendency = (): ReactElement => {
  const { data, loading } = useGetGenre();
  const totalTendency = data?.data.playInclinations;
  const tendencyList = totalTendency?.slice(0, 4).map((tendency, idx) => {
    return { ...tendency, genre: { ...tendency.genre, id: idx + 1 } };
  });

  const suggestTendency = () => {
    return <MyPageGuide content="방탈출을 진행하고 성향 분석을 해보세요." />;
  };

  const showTendencyList = (): null | JSX.Element[] => {
    if (tendencyList) {
      return tendencyList.map((tendency) => (
        <InfoBox
          key={tendency.genre.id}
          content={tendency.genre.genreName}
          bgColor="#2b2b2b"
          color="#ffffff"
          marginRight={8}
          borderRadius={4}
        />
      ));
    }
    return null;
  };

  if (loading) return <Loading />;
  return (
    <S.Section tendency={!!tendencyList}>
      <MyPageSubTitle
        content="방탕출 성향"
        page="/mypage/tendency"
        item={!!tendencyList}
        trueMargin="8px"
        falseMargin="40px"
        arrow
      />
      <S.TendBox>{tendencyList[0] ? showTendencyList() : suggestTendency()}</S.TendBox>
    </S.Section>
  );
};

export default EscapeTendency;
