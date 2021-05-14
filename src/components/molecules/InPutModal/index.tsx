import React, { ReactElement, useRef, useEffect, useState } from 'react';
import * as S from './style';

interface Props {
  clickOutsideClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
const InputModal = ({ clickOutsideClose, modalRef, setModalState }: Props): ReactElement => {
  const [firstRender, setFirstRender] = useState(false);
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    setFirstRender(true);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = '빵덕 방린이에요';
    }
  }, [firstRender]);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <S.Container onClick={clickOutsideClose}>
      <S.ModalBox ref={modalRef}>
        <S.TitleBox>
          <S.PTag>닉네임을 입력해주세요.</S.PTag>
        </S.TitleBox>
        <form>
          <S.Label htmlFor="nickname">
            <S.Span>닉네임</S.Span>
            <S.Input type="text" id="nickname" name="nickname" ref={inputRef} />
          </S.Label>
          <S.BtnBox>
            <S.LeftBtn type="button" onClick={() => setModalState(false)}>
              취소
            </S.LeftBtn>
            <S.RightBtn type="submit" onClick={onSubmit}>
              확인
            </S.RightBtn>
          </S.BtnBox>
        </form>
      </S.ModalBox>
    </S.Container>
  );
};

export default InputModal;
