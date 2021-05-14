import React, { ReactElement, useState } from 'react';
import BottomBtn from '../../atoms/BottomBtn';
import * as S from './style';
import whiteCheck from '../../../assets/images/check/white.png';
import grayCheck from '../../../assets/images/check/gray.png';

interface Props {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
const RemoveBottom = ({ setModalState }: Props): ReactElement => {
  const [isChecked, setIsChecked] = useState(false);

  const onBtnClick = () => {
    if (isChecked) {
      setModalState(true);
    }
  };

  return (
    <S.Container>
      <S.Box onClick={() => setIsChecked((prev) => !prev)}>
        <S.CheckBox isChecked={isChecked}>
          <img src={isChecked ? whiteCheck : grayCheck} alt="체크" />
        </S.CheckBox>
        <S.PTag>안내사항을 모두 확인하였고, 탈퇴에 동의합니다.</S.PTag>
      </S.Box>
      <BottomBtn content="회원 탈퇴" onClick={onBtnClick} />
    </S.Container>
  );
};

export default RemoveBottom;
