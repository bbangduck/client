import React, { ReactElement } from 'react';
import checked from '../../../assets/images/check/white.png';
import * as S from './style';

interface Props {
  clickOutsideClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  onAddMoreReview: () => void;
  onCancel: () => void;
}
const ReviewCompleteModal = ({
  clickOutsideClose,
  modalRef,
  setModalState,
  onAddMoreReview,
  onCancel,
}: Props): ReactElement => {
  const onDoLater = () => {
    setModalState(false);
    onCancel();
  };

  const onDoMore = () => {
    setModalState(false);
    onAddMoreReview();
  };

  return (
    <S.Container onClick={clickOutsideClose}>
      <S.ModalBox ref={modalRef}>
        <S.CheckBox>
          <img src={checked} alt="완료" />
        </S.CheckBox>
        <S.PTag>리뷰 작성 완료</S.PTag>
        <S.PTag2>사진 / 감상평도 기록해볼까요?</S.PTag2>
        <S.Box>
          <S.Btn1 type="button" onClick={onDoLater} data-blink="blink">
            다음에 하기
          </S.Btn1>
          <S.Btn2 type="button" onClick={onDoMore} data-blink="blink">
            추가입력
          </S.Btn2>
        </S.Box>
      </S.ModalBox>
    </S.Container>
  );
};

export default ReviewCompleteModal;
