import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import right from '../../../assets/images/arrow/right.png';
import * as S from './style';

interface Props {
  pageNumber: number;
  title: string;
  date: string;
  content: string;
}
const NoticeItem = ({ pageNumber, title, date, content }: Props): ReactElement => {
  const history = useHistory();

  const isTitle = () => {
    if (title.length > 27) {
      return `${title.substr(0, 27)} ...`;
    }
    return title;
  };

  const arrowClickHandeler = () => {
    const noticeItemInfo = { title, date, content };

    history.push({
      pathname: `/mypage/notice/${pageNumber}`,
      state: { noticeItemInfo },
    });
  };

  return (
    <S.Container>
      <S.Box>
        <S.PTag>{isTitle()}</S.PTag>
        <S.Img src={right} alt="공지사항 더보기" onClick={arrowClickHandeler} />
      </S.Box>
      <S.Span>{date}</S.Span>
    </S.Container>
  );
};

export default NoticeItem;
