import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  clickOutsideClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  btnContent: string;
  onSubmitHandeler?: () => void;
}
const Modal = ({
  clickOutsideClose,
  modalRef,
  setModalState,
  title,
  content,
  btnContent,
  onSubmitHandeler,
}: Props): ReactElement => {
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (onSubmitHandeler) onSubmitHandeler();
  };

  return (
    <S.Container onClick={clickOutsideClose}>
      <S.ModalBox ref={modalRef}>
        <S.TitleBox>
          <S.PTag>{title}</S.PTag>
        </S.TitleBox>
        {title === '친구 삭제' ? (
          <S.P>
            {content.substr(0, content.length - 17)}
            <br />
            {content.substr(-17)}
          </S.P>
        ) : (
          <S.P>{content}</S.P>
        )}
        <S.BtnBox>
          <S.LeftBtn type="button" onClick={() => setModalState(false)} data-blink="blink">
            취소
          </S.LeftBtn>
          <S.RightBtn type="button" onClick={onSubmit} data-blink="blink">
            {btnContent}
          </S.RightBtn>
        </S.BtnBox>
      </S.ModalBox>
    </S.Container>
  );
};

export default Modal;
