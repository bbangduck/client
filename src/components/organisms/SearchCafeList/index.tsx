import React, { ReactElement } from 'react';
import PickItem from '../../molecules/PickItem';
import * as S from './style';

const SearchCafeList = (): ReactElement => {
  return (
    <S.Article>
      <S.PTag>방탈출 카페</S.PTag>
      <ul>
        <PickItem
          titleColor="#4b4b4b"
          title="제로월드 서현점"
          address="서울 서초동 930번지 34"
          themeAccount={8}
          boxBgColor="#2b2b2b"
          boxColor="#ffffff"
          addressColor="#9c9c9c"
          themeColor="#4b4b4b"
          themeCountColor="#4b4b4b"
          borderColor="#ebebeb"
          marginBottom={12}
        />
        <PickItem
          titleColor="#4b4b4b"
          title="제로월드 서현점"
          address="서울 서초동 930번지 34"
          themeAccount={8}
          boxBgColor="#2b2b2b"
          boxColor="#ffffff"
          addressColor="#9c9c9c"
          themeColor="#4b4b4b"
          themeCountColor="#4b4b4b"
          borderColor="#ebebeb"
          marginBottom={12}
        />
        <PickItem
          titleColor="#4b4b4b"
          title="제로월드 서현점"
          address="서울 서초동 930번지 34"
          themeAccount={8}
          boxBgColor="#2b2b2b"
          boxColor="#ffffff"
          addressColor="#9c9c9c"
          themeColor="#4b4b4b"
          themeCountColor="#4b4b4b"
          borderColor="#ebebeb"
          marginBottom={12}
        />
        <PickItem
          titleColor="#4b4b4b"
          title="제로월드 서현점"
          address="서울 서초동 930번지 34"
          themeAccount={8}
          boxBgColor="#2b2b2b"
          boxColor="#ffffff"
          addressColor="#9c9c9c"
          themeColor="#4b4b4b"
          themeCountColor="#4b4b4b"
          borderColor="#ebebeb"
          marginBottom={12}
        />
      </ul>
    </S.Article>
  );
};

export default SearchCafeList;
