import React, { ReactElement } from 'react';
import * as S from './style';
import logo from '../../../assets/images/logo/logo.png';

const UpdateFooter = (): ReactElement => {
  return (
    <S.Footer>
      <img src={logo} alt="로고" />
      <S.PTag>Copyright ⓒ Bbangduck. All right reserved.</S.PTag>
    </S.Footer>
  );
};

export default UpdateFooter;
