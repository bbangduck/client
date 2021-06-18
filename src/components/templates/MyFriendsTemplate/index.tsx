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

const MyFriendsTemplate = (): ReactElement => {
  const [navClick, setNavClick] = useState(0);
  const [myFriendsInputValue, setMyFriendsInputValue] = useState('');
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  const searchMyFriends = async () => {
    console.log(myFriendsInputValue);
  };

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} content="내 친구" />
      <MyFriendsNav navClick={navClick} setNavClick={setNavClick} />
      {!navClick ? (
        <div>
          <InputSearch
            onSearch={searchMyFriends}
            setInputValue={setMyFriendsInputValue}
            placeholder="친구 검색"
            inputValue={myFriendsInputValue}
            marginBottom={16}
          />
          <MyFriendsList />
        </div>
      ) : (
        <div>
          <InputRequest />
          <RequestFriends />
        </div>
      )}
    </section>
  );
};

export default MyFriendsTemplate;
