import React, { ReactElement } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import OkModal from '../OkModal';
import * as S from './style';

const InputRequest = (): ReactElement => {
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);

  const onRequest = () => {
    setModalOn(true);
  };

  return (
    <S.Container>
      <S.Input type="text" placeholder="닉네임 입력" />
      <S.Btn onClick={onRequest}>친구신청</S.Btn>
      {modalOn ? (
        <OkModal
          clickOutsideClose={clickOutside}
          modalRef={visibleContentRef}
          setModalState={setModalOn}
          content="제로월드 강남점"
        />
      ) : null}
    </S.Container>
  );
};

export default InputRequest;
