import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import right from '../../../assets/images/arrow/right.png';
import { shortSentence } from '../../../hooks/shortSentence';
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
      return `${shortSentence(27, title)}.`;
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
    <S.Container data-blink="blink" onClick={arrowClickHandeler}>
      <S.Box data-blink="blink">
        <S.PTag data-blink="blink">{isTitle()}</S.PTag>
        <img src={right} alt="공지사항 더보기" data-blink="blink" />
      </S.Box>
      <S.Span data-blink="blink">{date}</S.Span>
    </S.Container>
  );
};

export default NoticeItem;
