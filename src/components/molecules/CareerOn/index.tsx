import React, { ReactElement, useState } from 'react';
import ToggleBtn from '../../atoms/ToggleBtn';
import * as S from './style';

const CareerOn = (): ReactElement => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <S.Container>
      <S.Box>
        <S.H2>방탈출 기록 공개</S.H2>
        <ToggleBtn state={isClicked} setState={setIsClicked} />
      </S.Box>
    </S.Container>
  );
};

export default CareerOn;
