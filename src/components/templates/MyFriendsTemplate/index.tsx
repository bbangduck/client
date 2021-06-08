import React, { ReactElement, useState, useEffect } from 'react';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import MyFriendsNav from '../../molecules/MyFriendsNav';
import InputSearch from '../../molecules/InputSearch';
import MyFriendsFilter from '../../atoms/MyFriendsFilter';
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
      <InputSearch onSearch={searchMyFriends} setInputValue={setMyFriendsInputValue} />
      <MyFriendsFilter />
      <MyFriendsList />
    </section>
  );
};

export default MyFriendsTemplate;
