import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosAPI from '../../../utils/axios';
import pen from '../../../assets/images/pen/pen.png';
import UpdateItem from '../../molecules/UpdateItem';
import CareerOn from '../../molecules/CareerOn/index';
import { useClickOutside } from '../../../hooks/useClickOutside';
import InputModal from '../../molecules/InPutModal';

const UpdateList = (): ReactElement => {
  const [nickNameError, setNickNameError] = useState<{
    message: string;
    isError: boolean;
  }>({ message: '', isError: false });
  const [introError, setIntroError] = useState<{
    message: string;
    isError: boolean;
  }>({ message: '', isError: false });
  const [nicknameValue, setNicknameValue] = useState('');
  const [introductionValue, setIntroductionValue] = useState('');
  const [nicknameModalRef, nicknameModalOn, setNicknameModalOn, nickNameClickOutside] = useClickOutside(false);
  const [introModalRef, introModalOn, setIntroModalOn, introClickOutside] = useClickOutside(false);

  const history = useHistory();
  const userId = sessionStorage.getItem('bbangUserId');

  const onNicknameUpdate = async () => {
    try {
      await axiosAPI({
        method: 'put',
        url: `/api/members/${userId}/nicknames`,
        data: { nickname: nicknameValue },
      });
      setNicknameModalOn(false);
      setNickNameError((prev) => {
        return { ...prev, isError: false };
      });
    } catch (err) {
      if (err.response.status === 400) {
        const message = '닉네임을 입력해주세요.';
        setNickNameError(() => {
          return { message, isError: true };
        });
      } else if (err.response.status === 409) {
        const message = '중복된 닉네임 입니다.';
        setNickNameError(() => {
          return { message, isError: true };
        });
      } else {
        history.push('/error');
      }
    }
  };

  const onIntroductionUpdate = async () => {
    try {
      await axiosAPI({
        method: 'put',
        url: `/api/members/${userId}/descriptions`,
        data: { description: introductionValue || null },
      });
      setIntroModalOn(false);
      setIntroError((prev) => {
        return { ...prev, isError: false };
      });
    } catch (err) {
      if (err.response.status === 400) {
        const message = '나의 한마디를 입력해주세요.';
        setIntroError(() => {
          return { message, isError: true };
        });
      } else {
        history.push('/error');
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
          title="닉네임을"
          subTitle="닉네임"
          inputError={nickNameError.isError}
          errorMessage={nickNameError.message}
        />
      ) : null}
      {introModalOn ? (
        <InputModal
          clickOutsideClose={introClickOutside}
          modalRef={introModalRef}
          setModalState={setIntroModalOn}
          onUpdate={onIntroductionUpdate}
          onValueChange={setIntroductionValue}
          title="나의 한마디를"
          subTitle="나의 한마디"
          inputError={introError.isError}
          errorMessage={introError.message}
        />
      ) : null}
    </div>
  );
};

export default UpdateList;
