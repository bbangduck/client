import React, { ReactElement, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import MyFriendsNav from '../../molecules/MyFriendsNav';
import InputSearch from '../../molecules/InputSearch';
import MyFriendsList from '../../organisms/MyFriendsList';
import RequestFriends from '../../organisms/RequestFriends';
import InputRequest from '../../molecules/InputRequest';
import userExist from '../../../utils/userExist';
import useGetUserData from '../../../swr/useGetUserData';
import * as S from './style';

const MyFriendsTemplate = (): ReactElement => {
  const [navClick, setNavClick] = useState(0);
  const [myFriendsInputValue, setMyFriendsInputValue] = useState('');
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  const searchMyFriends = async () => {
    // console.log(myFriendsInputValue);
  };

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <S.Section>
      <S.Box>
        <UpdateHeader arrow={left} content="내 친구" />
      </S.Box>
      <MyFriendsNav navClick={navClick} setNavClick={setNavClick} />
      {!navClick ? (
        <S.Box>
          <InputSearch
            onSearch={searchMyFriends}
            setInputValue={setMyFriendsInputValue}
            placeholder="친구 검색"
            inputValue={myFriendsInputValue}
            marginBottom={16}
          />
          <MyFriendsList />
        </S.Box>
      ) : (
        <S.Box>
          <InputRequest />
          <RequestFriends />
        </S.Box>
      )}
    </S.Section>
  );
};

export default MyFriendsTemplate;
