import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import right from '../../../assets/images/arrow/right.png';
import * as S from './style';

const EscapeNotices = (): ReactElement => {
  const history = useHistory();

  const notice = '[이벤트]빵덕 오픈 이벤트 리뷰ㄴㄴㄴㄴㄴㄴ';
  const shortedNotice = notice.substring(0, 22);
  return (
    <S.Section>
      <S.Box>
        <S.LeftIconBox>
          <S.LeftIcon src="" alt="" />
        </S.LeftIconBox>
        <S.PTag>{notice.length > 22 ? `${shortedNotice}..` : notice}</S.PTag>
      </S.Box>
      <img onClick={() => history.push('/')} src={right} alt="공지사항 더보기" style={{ cursor: 'pointer' }} />
    </S.Section>
  );
};

export default EscapeNotices;
