import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
  content?: string;
  icon: string | null;
  modalHandeler?: React.Dispatch<React.SetStateAction<boolean>>;
}
const UpdateItem = ({ title, content, icon, modalHandeler }: Props): ReactElement => {
  return (
    <S.Container>
      <S.TopBox>
        <S.H2>{title}</S.H2>
      </S.TopBox>
      <S.BottomBox>
        <S.PTag>{content || title}</S.PTag>
        {icon ? (
          <S.Img src={icon} alt="수정 이미지" onClick={() => modalHandeler && modalHandeler(true)} data-blink="blink" />
        ) : null}
      </S.BottomBox>
    </S.Container>
  );
};

export default UpdateItem;
