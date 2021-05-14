import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
  content: string;
  icon: string | null;
}
const UpdateItem = ({ title, content, icon }: Props): ReactElement => {
  return (
    <S.Container>
      <S.TopBox>
        <S.H2>{title}</S.H2>
      </S.TopBox>
      <S.BottomBox>
        <S.PTag>{content}</S.PTag>
        {icon ? <S.Img src={icon} alt="수정 이미지" /> : null}
      </S.BottomBox>
    </S.Container>
  );
};

export default UpdateItem;
