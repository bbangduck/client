import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import right from '../../../assets/images/arrow/right.png';
import speaker from '../../../assets/images/speaker/speaker.png';
import * as S from './style';

const EscapeNotices = (): ReactElement => {
  const history = useHistory();

  const notice = '[이벤트]빵덕 오픈 이벤트 리뷰ㄴㄴㄴㄴㄴㄴ';
  const shortedNotice = notice.substring(0, 22);
  return (
    <S.Section onClick={() => history.push('/mypage/notice')} data-blink="blink">
      <S.Box data-blink="blink">
        <S.Img src={speaker} alt="" data-blink="blink" />
        <S.PTag data-blink="blink">{notice.length > 22 ? `${shortedNotice}..` : notice}</S.PTag>
      </S.Box>
      <img src={right} alt="공지사항 더보기" data-blink="blink" />
    </S.Section>
  );
};

export default EscapeNotices;
