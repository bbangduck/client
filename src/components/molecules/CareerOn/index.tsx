import React, { ReactElement, useState } from 'react';
import axiosAPI from '../../../utils/axios';
import ToggleBtn from '../../atoms/ToggleBtn';
import * as S from './style';

const CareerOn = (): ReactElement => {
  const [isClicked, setIsClicked] = useState(false);
  const userId = sessionStorage.getItem('bbangUserId');

  const onCareerToggle = async () => {
    await axiosAPI({
      method: 'put',
      url: `/api/members/${userId}/room-escape/recodes/open-yn`,
    });
  };

  return (
    <S.Container>
      <S.Box>
        <S.H2>방탈출 기록 공개</S.H2>
        <ToggleBtn state={isClicked} setState={setIsClicked} toggleHandeler={onCareerToggle} />
      </S.Box>
    </S.Container>
  );
};

export default CareerOn;
