import React, { ReactElement } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import MyFriendsFilter from '../../atoms/MyFriendsFilter';
import BottomModal from '../../molecules/BottomModal';
import MyFriendsItem from '../../molecules/MyFriendsItem';
import Modal from '../Modal';
import * as S from './style';

const MyFriendsList = (): ReactElement => {
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);
  const [visibleFinalRef, finalModalOn, setFinalModalOn, finalClickOutside] = useClickOutside(false);

  const onMoreClick = () => {
    setModalOn(true);
  };

  const onDelete = () => {
    setModalOn(false);
    setFinalModalOn(true);
  };

  const onFinalDelete = () => {
    setFinalModalOn(false);
  };

  return (
    <div>
      <MyFriendsFilter />
      <ul>
        <MyFriendsItem onMoreClick={onMoreClick} />
      </ul>
      <S.ModalBox>
        <BottomModal
          title="제로월드 강남점"
          lastBtn="친구 삭제하기"
          onLastClick={onDelete}
          visibleContentRef={visibleContentRef}
          clickOutside={clickOutside}
          isOn={modalOn}
        />
      </S.ModalBox>
      {finalModalOn ? (
        <Modal
          clickOutsideClose={finalClickOutside}
          modalRef={visibleFinalRef}
          setModalState={setFinalModalOn}
          title="친구 삭제"
          content="제로월드 강남점 친구를 친구 목록에서 삭제하시겠습니까?"
          btnContent="삭제"
          onSubmitHandeler={onFinalDelete}
        />
      ) : null}
    </div>
  );
};

export default MyFriendsList;
