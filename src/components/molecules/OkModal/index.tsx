import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  clickOutsideClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
}
const OkModal = ({ clickOutsideClose, modalRef, setModalState, content }: Props): ReactElement => {
  return (
    <S.Container onClick={clickOutsideClose}>
      <S.ModalBox ref={modalRef}>
        <S.PTag>친구 신청 완료</S.PTag>
        <S.P>
          {content} 친구에게
          <br /> 친구 신청을 보냈습니다.
        </S.P>
        <S.BtnBox>
          <S.Btn type="button" onClick={() => setModalState(false)} data-blink="blink">
            확인
          </S.Btn>
        </S.BtnBox>
      </S.ModalBox>
    </S.Container>
  );
};

export default OkModal;
