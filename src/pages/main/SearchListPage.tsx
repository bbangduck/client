import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import SearchListTemplate from '../../components/templates/SearchListTemplate';

const SearchListPage = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>빵덕 - 찾기</title>
        <meta name="title" content="빵덕 검색 페이지" />
        <meta name="description" content="빵덕 검색 페이지, 무엇을 찾고계신가요?" />
      </Helmet>
      <SearchListTemplate />
    </>
  );
};

export default SearchListPage;
