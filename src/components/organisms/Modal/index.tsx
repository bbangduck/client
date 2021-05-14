import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  clickOutsideClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  btnContent: string;
}
const Modal = ({ clickOutsideClose, modalRef, setModalState, title, content, btnContent }: Props): ReactElement => {
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <S.Container onClick={clickOutsideClose}>
      <S.ModalBox ref={modalRef}>
        <S.TitleBox>
          <S.PTag>{title}</S.PTag>
        </S.TitleBox>
        <S.P>{content}</S.P>
        <S.BtnBox>
          <S.LeftBtn type="button" onClick={() => setModalState(false)}>
            취소
          </S.LeftBtn>
          <S.RightBtn type="submit" onClick={onSubmit}>
            {btnContent}
          </S.RightBtn>
        </S.BtnBox>
      </S.ModalBox>
    </S.Container>
  );
};

export default Modal;
