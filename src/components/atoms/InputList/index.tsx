import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
}
const InputList = ({ title }: Props): ReactElement => {
  return (
    <S.List>
      <S.Placeholder>{title}</S.Placeholder>
      <S.ImgBox>
        <img src="" alt="" />
      </S.ImgBox>
    </S.List>
  );
};

export default InputList;
