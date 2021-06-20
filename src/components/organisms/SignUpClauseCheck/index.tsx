import React, { ReactElement } from 'react';
import * as S from './style';
import whiteCheck from '../../../assets/images/check/white.png';
import grayCheck from '../../../assets/images/check/gray.png';
import darkGrayCheck from '../../../assets/images/check/darkGray.png';

interface Props {
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: boolean;
}
const SignUpClauseCheck = ({ setIsChecked, isChecked }: Props): ReactElement => {
  const checkHandeler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <S.Section>
      <S.H1>
        빵덕 서비스 이용약관에
        <br /> 동의해주세요.
      </S.H1>
      <S.TopBox onClick={checkHandeler}>
        <S.CheckBox isChecked={isChecked}>
          <img src={isChecked ? whiteCheck : grayCheck} alt="모두 동의체크" />
        </S.CheckBox>
        <S.P>모두 동의 (선택 정보 포함)</S.P>
      </S.TopBox>
      <S.Box>
        <S.CheckBox2>
          <img src={isChecked ? darkGrayCheck : grayCheck} alt="개인정보 처리방침 동의체크" />
        </S.CheckBox2>
        <S.PTag isChecked={isChecked}>[필수] 개인정보 처리방침</S.PTag>
        <S.Span>보기</S.Span>
      </S.Box>
      <S.Box>
        <S.CheckBox2>
          <img src={isChecked ? darkGrayCheck : grayCheck} alt="이용약관 동의체크" />
        </S.CheckBox2>
        <S.PTag isChecked={isChecked}>[필수] 이용약관</S.PTag>
        <S.Span>보기</S.Span>
      </S.Box>
    </S.Section>
  );
};

export default SignUpClauseCheck;
