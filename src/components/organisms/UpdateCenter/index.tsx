import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import RouteBtn from '../../molecules/RouteBtn';
import * as S from './style';
import theme from '../../../styles/theme';
import right from '../../../assets/images/arrow/right.png';
import { useClickOutside } from '../../../hooks/useClickOutside';
import Modal from '../Modal';
import removeSessionStorage from '../../../utils/removeSessionStorage';
import axiosAPI from '../../../utils/axios';

const darkColor = theme.colors.fontGray[2];
const lightColor = theme.colors.fontGray[0];

const UpdateCenter = (): ReactElement => {
  const history = useHistory();
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);

  const logOutFetch = async () => {
    const userId = sessionStorage.getItem('bbangUserId');
    try {
      await axiosAPI({
        method: 'get',
        url: `/api/auth/${userId}/sign-out`,
      });
    } catch (err) {
      history.push('/error');
    }
  };

  const onLogOut = () => {
    logOutFetch();
    removeSessionStorage();
    setModalOn(false);
    // 로그아웃후 이동페이지로 이동예정
    history.push('/');
  };

  return (
    <section>
      <RouteBtn
        content="프로필 변경"
        icon={right}
        color={darkColor}
        fontWeight="bold"
        onClick={() => history.push('/mypage/profile')}
      />
      <RouteBtn
        content="개인정보 처리방침"
        icon={right}
        color={darkColor}
        fontWeight="bold"
        onClick={() => history.push('/mypage/policy')}
      />
      <RouteBtn
        content="이용약관"
        icon={right}
        color={darkColor}
        fontWeight="bold"
        onClick={() => history.push('/mypage/clause')}
      />
      <S.Box>
        <RouteBtn content="로그아웃" color={lightColor} fontWeight="normal" onClick={() => setModalOn(true)} />
        <RouteBtn
          content="회원탈퇴"
          color={lightColor}
          fontWeight="normal"
          onClick={() => history.push('/mypage/removeAccount')}
        />
      </S.Box>
      {modalOn ? (
        <Modal
          clickOutsideClose={clickOutside}
          modalRef={visibleContentRef}
          setModalState={setModalOn}
          title="빵덕 로그아웃"
          content="정말로 로그아웃 하시겠어요?"
          btnContent="로그아웃"
          onSubmitHandeler={onLogOut}
        />
      ) : null}
    </section>
  );
};

export default UpdateCenter;
