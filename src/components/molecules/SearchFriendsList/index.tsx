import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import UserData from '../UserData';
import * as S from './style';

interface Props {
  firstRender: boolean;
}
const SearchFriendsList = ({ firstRender }: Props): ReactElement => {
  const history = useHistory();
  const result = 1;

  const onChooseFriend = () => {
    console.log('선택');
    // history.push({
    //   pathname:"/"
    // })
  };

  const tagAfterSearch = () => {
    if (!firstRender && result) {
      return (
        <S.PTag2>
          <S.Span>24</S.Span>건의 검색결과
        </S.PTag2>
      );
    }
    if (!firstRender && !result) {
      return <S.NoResult>검색 결과가 없습니다.</S.NoResult>;
    }
    return null;
  };

  return (
    <div>
      {/* 첫렌더링시 화면(검색전) */}
      {firstRender ? <S.PTag>친구</S.PTag> : null}
      {/* 검색후의 화면 */}
      {tagAfterSearch()}
      {result ? <UserData choiceBtn onChoose={onChooseFriend} marginBottom={18} marginTop={18} /> : null}
    </div>
  );
};

export default SearchFriendsList;
