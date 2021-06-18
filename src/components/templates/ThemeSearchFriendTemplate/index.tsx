import React, { ReactElement, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import InputSearch from '../../molecules/InputSearch';
import SearchFriendsList from '../../molecules/SearchFriendsList';
import useGetUserData from '../../../swr/useGetUserData';
import userExist from '../../../utils/userExist';

const ThemeSearchFriendTemplate = (): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const [firstRender, setFirstRender] = useState(false);
  const { errorStatus } = useGetUserData();
  const withDrawalUser = errorStatus === 403;

  const onSearchClick = () => {
    setFirstRender(false);
  };

  useEffect(() => {
    setFirstRender(true);
  }, []);

  if (!userExist() || withDrawalUser) return <Redirect to="/login" />;
  return (
    <section>
      <UpdateHeader arrow={left} content="같이한 친구 선택" />
      <InputSearch
        onSearch={onSearchClick}
        setInputValue={setInputValue}
        inputValue={inputValue}
        placeholder="친구 검색"
        marginBottom={8}
      />
      <SearchFriendsList firstRender={firstRender} />
    </section>
  );
};

export default ThemeSearchFriendTemplate;
