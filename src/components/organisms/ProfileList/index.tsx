import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosAPI from '../../../utils/axios';
import pen from '../../../assets/images/pen/pen.png';
import UpdateItem from '../../molecules/UpdateItem';
import CareerOn from '../../molecules/CareerOn/index';
import { useClickOutside } from '../../../hooks/useClickOutside';
import InputModal from '../../molecules/InPutModal';

const UpdateList = (): ReactElement => {
  const history = useHistory();

  const [nicknameValue, setNicknameValue] = useState('');
  const [introductionValue, setIntroductionValue] = useState('');
  const [nicknameModalRef, nicknameModalOn, setNicknameModalOn, nickNameClickOutside] = useClickOutside(false);
  const [introModalRef, introModalOn, setIntroModalOn, introClickOutside] = useClickOutside(false);
  const userId = sessionStorage.getItem('bbangUserId');

  const onNicknameUpdate = async () => {
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
      } else {
        history.push('/error');
      }
    }
  };

  const onIntroductionUpdate = async () => {
    try {
      const res = await axiosAPI({
        method: 'put',
        url: `/api/members/${userId}/descriptions`,
        data: { description: introductionValue || null },
      });
      setIntroModalOn(false);
      console.log(res.status);
    } catch (err) {
      if (err.response.status === 400) {
        alert('자기소개를 입력해주세요');
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
      {introModalOn ? (
        <InputModal
          clickOutsideClose={introClickOutside}
          modalRef={introModalRef}
          setModalState={setIntroModalOn}
          onUpdate={onIntroductionUpdate}
          onValueChange={setIntroductionValue}
        />
      ) : null}
    </div>
  );
};

export default UpdateList;
