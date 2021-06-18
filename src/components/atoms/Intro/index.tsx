import React, { ReactElement } from 'react';
import useGetUserData from '../../../swr/useGetUserData';
import Loading from '../Loding';
import * as S from './style';

const Intro = (): ReactElement => {
  const { data, loading } = useGetUserData();
  const myDescription = data?.data.description;

  if (loading) return <Loading />;
  return (
    <S.Container>
      <S.PTag content={myDescription}>{myDescription || '나의 한마디를 남겨보세요'}</S.PTag>
    </S.Container>
  );
};

export default Intro;
