import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import kakao from '../../../assets/images/kakao/kakao.png';
import naver from '../../../assets/images/naver/naver.png';
import Nav from '../../molecules/Nav';
import * as S from './style';

const LoginBottom = (): ReactElement => {
  const history = useHistory();

  const onBtnClick = () => {
    history.push('/login/clause');
  };

  return (
    <S.Container>
      <S.Btn type="button" onClick={onBtnClick}>
        <img src={kakao} alt="카카오로그인" />
        카카오로 계속하기
      </S.Btn>
      <S.Btn2 type="button" onClick={onBtnClick}>
        <img src={naver} alt="네이버로그인" />
        네이버로 계속하기
      </S.Btn2>
      <Nav />
    </S.Container>
  );
};

export default LoginBottom;
