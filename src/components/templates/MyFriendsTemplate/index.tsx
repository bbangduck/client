import React, { ReactElement, useState } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import MyFriendsNav from '../../molecules/MyFriendsNav';
import InputSearch from '../../molecules/InputSearch';
import MyFriendsList from '../../organisms/MyFriendsList';

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
        <>
          <InputSearch onSearch={searchMyFriends} setInputValue={setMyFriendsInputValue} />
          <MyFriendsList />
        </>
      ) : (
        <p>나야</p>
      )}
    </section>
  );
};

export default MyFriendsTemplate;
