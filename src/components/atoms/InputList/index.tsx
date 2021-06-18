import React, { ReactElement } from 'react';
import arrowDown from '../../../assets/images/arrow/down.png';
import * as S from './style';

interface Props {
  title: string;
}
const InputList = ({ title }: Props): ReactElement => {
  return (
    <S.List>
      <S.Placeholder>{title}</S.Placeholder>
      <S.ImgBox>
        <img src={arrowDown} alt="" />
      </S.ImgBox>
    </S.List>
  );
};

export default InputList;
