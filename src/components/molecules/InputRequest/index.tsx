import React, { ReactElement } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import OkModal from '../OkModal';
import * as S from './style';

const InputRequest = (): ReactElement => {
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);

  const onRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModalOn(true);
  };

  return (
    <S.Form onSubmit={onRequest}>
      <S.Input type="text" placeholder="닉네임 입력" />
      <S.Btn type="submit">친구신청</S.Btn>
      {modalOn ? (
        <OkModal
          clickOutsideClose={clickOutside}
          modalRef={visibleContentRef}
          setModalState={setModalOn}
          content="제로월드 강남점"
        />
      ) : null}
    </S.Form>
  );
};

export default InputRequest;
