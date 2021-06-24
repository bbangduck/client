import React, { ReactElement } from 'react';
import Loader from 'react-loader-spinner';
import * as S from './style';

const Loading = (): ReactElement => {
  return (
    <S.Container>
      <Loader type="ThreeDots" color="#2b2b2b" width={50} height={50} />
    </S.Container>
  );
};

export default Loading;
