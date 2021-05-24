import React, { ReactElement, useState } from 'react';
import axiosAPI from '../../../utils/axios';
import pen from '../../../assets/images/pen/pen.png';
import UpdateItem from '../../molecules/UpdateItem';
import CareerOn from '../../molecules/CareerOn/index';
import { useClickOutside } from '../../../hooks/useClickOutside';
import InputModal from '../../molecules/InPutModal';

const UpdateList = (): ReactElement => {
  const [nicknameValue, setNicknameValue] = useState('');
  const [nicknameModalRef, nicknameModalOn, setNicknameModalOn, nickNameClickOutside] = useClickOutside(false);
  const [introModalRef, introModalOn, setIntroModalOn, introClickOutside] = useClickOutside(false);

  const onNicknameUpdate = async () => {
    const userId = sessionStorage.getItem('bbangUserId');
    try {
      await axiosAPI({
        method: 'put',
        url: `/api/members/${userId}/nicknames`,
        data: { nickname: nicknameValue },
      });
      setNicknameModalOn(false);
    } catch (err) {
      if (err.response.status === 400) {
        alert('닉네임을 입력해주세요');
      }
    }
  };

  return (
    <div>
      <UpdateItem title="이메일 주소" content="Bbangduck@gmail.com" icon={null} />
      <UpdateItem title="닉네임" content="빵덕 방린이에요" icon={pen} modalHandeler={setNicknameModalOn} />
      <UpdateItem
        title="나의 한마디"
        content="안녕하세요 잘 부탁드립니다."
        icon={pen}
        modalHandeler={setIntroModalOn}
      />
      <CareerOn />
      {nicknameModalOn ? (
        <InputModal
          clickOutsideClose={nickNameClickOutside}
          modalRef={nicknameModalRef}
          setModalState={setNicknameModalOn}
          onUpdate={onNicknameUpdate}
          onValueChange={setNicknameValue}
        />
      ) : null}
      {/* {introModalOn ? (
        <InputModal clickOutsideClose={introClickOutside} modalRef={introModalRef} setModalState={setIntroModalOn} />
      ) : null} */}
    </div>
  );
};

export default UpdateList;
