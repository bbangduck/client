import React, { ReactElement } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useClickOutside } from '../../../hooks/useClickOutside';
import RemoveBottom from '../../molecules/RemoveBottom';
import Remove2Content from '../../molecules/RemoveContent2';
import UpdateHeader from '../../molecules/UpdateHeader';
import Modal from '../../organisms/Modal';
import left from '../../../assets/images/arrow/left.png';
import * as S from './style';
import removeSessionStorage from '../../../utils/removeSessionStorage';
import userExist from '../../../utils/userExist';
import axiosAPI from '../../../utils/axios';
import useGetUserData from '../../../swr/useGetUserData';

const RemoveAccountTemplate2 = (): ReactElement => {
  const history = useHistory();
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  const signOutUser = async () => {
    const userId = sessionStorage.getItem('bbangUserId');
    try {
      await axiosAPI({
        method: 'delete',
        url: `/api/auth/${userId}/withdrawal`,
      });
      removeSessionStorage();
      setModalOn(false);
    } catch (err) {
      removeSessionStorage();
      setModalOn(false);
      history.push('/error');
    }
  };

  const onSignOut = () => {
    signOutUser();
  };

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader content="회원탈퇴" arrow={left} />
      <Remove2Content />
      <S.BtnBox>
        <RemoveBottom setModalState={setModalOn} />
      </S.BtnBox>
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
    </section>
  );
};

export default RemoveAccountTemplate2;
