import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import { useClickOutside } from '../../../hooks/useClickOutside';
import RemoveBottom from '../../molecules/RemoveBottom';
import Remove2Content from '../../molecules/RemoveContent2';
import UpdateHeader from '../../molecules/UpdateHeader';
import Modal from '../../organisms/Modal';
import left from '../../../assets/images/arrow/left.png';
import * as S from './style';
import axiosWithToken from '../../../utils/axios';
import removeSessionStorage from '../../../utils/removeSessionStorage';
import userCheck from '../../../utils/userCheck';

const RemoveAccountTemplate2 = (): ReactElement => {
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);

  const onSignOut = async () => {
    const userId = sessionStorage.getItem('bbangUserId');
    await axiosWithToken({
      method: 'delete',
      url: `/api/auth/${userId}/withdrawal`,
    });

    removeSessionStorage();
    setModalOn(false);
    // 회원탈퇴후 이동페이지로 이동예정
  };

  if (!userCheck()) return <Redirect to="/" />;
  return (
    <S.Section>
      <UpdateHeader content="회원탈퇴" arrow={left} />
      <Remove2Content />
      <RemoveBottom setModalState={setModalOn} />
      {modalOn ? (
        <Modal
          clickOutsideClose={clickOutside}
          modalRef={visibleContentRef}
          setModalState={setModalOn}
          title="빵덕 회원 탈퇴"
          content="정말로 빵덕을 탈퇴하시겠어요?"
          btnContent="탈퇴"
          onSubmitHandeler={onSignOut}
        />
      ) : null}
    </S.Section>
  );
};

export default RemoveAccountTemplate2;
