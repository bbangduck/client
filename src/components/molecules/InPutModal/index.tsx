/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useRef, useEffect } from 'react';
import * as S from './style';

interface Props {
  clickOutsideClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdate: () => void;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  subTitle: string;
  inputError: boolean;
  errorMessage: string;
}
const InputModal = ({
  clickOutsideClose,
  modalRef,
  setModalState,
  onUpdate,
  onValueChange,
  title,
  subTitle,
  inputError,
  errorMessage,
}: Props): ReactElement => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = '빵덕 방린이에요';
      onValueChange(inputRef.current.value);
    }
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(() => e.target.value);
  };

  return (
    <S.Container onClick={clickOutsideClose}>
      <S.ModalBox ref={modalRef}>
        <S.TitleBox>
          <S.PTag>{title} 입력해주세요.</S.PTag>
        </S.TitleBox>
        <form onSubmit={onSubmit}>
          <S.Label htmlFor="nickname">
            <S.Span inputError={inputError}>{subTitle}</S.Span>
            <S.Input
              type="text"
              id="nickname"
              name="nickname"
              ref={inputRef}
              onChange={onInputChange}
              inputError={inputError}
            />
            {errorMessage ? <S.Span2>{errorMessage}</S.Span2> : null}
          </S.Label>
          <S.BtnBox>
            <S.LeftBtn type="button" onClick={() => setModalState(false)} data-blink="blink">
              취소
            </S.LeftBtn>
            <S.RightBtn type="submit" data-blink="blink">
              확인
            </S.RightBtn>
          </S.BtnBox>
        </form>
      </S.ModalBox>
    </S.Container>
  );
};

export default InputModal;
