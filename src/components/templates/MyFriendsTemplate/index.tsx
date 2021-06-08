import React, { ReactElement, useState } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import MyFriendsNav from '../../molecules/MyFriendsNav';
import InputSearch from '../../molecules/InputSearch';
import MyFriendsList from '../../organisms/MyFriendsList';
import RequestFriends from '../../organisms/RequestFriends';
import InputRequest from '../../molecules/InputRequest';

const MyFriendsTemplate = (): ReactElement => {
  const [navClick, setNavClick] = useState(0);
  const [myFriendsInputValue, setMyFriendsInputValue] = useState('');

  const searchMyFriends = async () => {
    console.log(myFriendsInputValue);
  };

  return (
    <section>
      <UpdateHeader arrow={left} content="내 친구" />
      <MyFriendsNav navClick={navClick} setNavClick={setNavClick} />
      {!navClick ? (
        <div>
          <InputSearch onSearch={searchMyFriends} setInputValue={setMyFriendsInputValue} />
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
