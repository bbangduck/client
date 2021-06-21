import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import test from '../../../assets/images/test/poster.jpg';
import * as S from './style';

const NoticeContent = (): ReactElement => {
  const location = useLocation<NoticeItemInfoType>();
  const { title, date, content } = location.state.noticeItemInfo;

  return (
    <S.Container>
      <S.Header>
        <S.H1>{title}</S.H1>
        <S.Span>{date}</S.Span>
      </S.Header>
      <div>
        <S.PTag>{content}</S.PTag>
        <S.ImgBox>
          <S.Img src={test} alt="" />
        </S.ImgBox>
      </div>
    </S.Container>
  );
};

export default NoticeContent;
