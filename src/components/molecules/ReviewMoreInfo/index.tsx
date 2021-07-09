import React, { ReactElement } from 'react';
import InfoBox from '../../atoms/InfoBox';
import thumb from '../../../assets/images/thumb/thumb.svg';
import { shortSentence } from '../../../hooks/shortSentence';
import * as S from './style';

interface Props {
  moreOn: boolean;
  like: boolean;
  likeCount: number;
}
const ReviewMoreInfo = ({ moreOn, like, likeCount }: Props): ReactElement => {
  const hash = '재미 없어';
  const cafe = '제로월드 강남점 열글자 이니';

  return (
    <S.Container>
      {moreOn ? (
        <S.HashBox>
          <InfoBox
            content={`#${hash}`}
            bgColor="#f4f4f9"
            color="#9c9c9c"
            marginRight={9}
            borderRadius={4}
            marginBottom={8}
          />
        </S.HashBox>
      ) : null}
      <S.Help>{likeCount}명에게 도움이 됐어요.</S.Help>
      <S.Box moreOn={moreOn}>
        <S.ThumbBox data-blink="blink">
          <img src={thumb} alt="도움이 돼요" data-blink="blink" />
          <S.ThumbP data-blink="blink">{like ? '도움이 됨' : '도움이 돼요'}</S.ThumbP>
        </S.ThumbBox>
        <S.ThumbP>신고하기</S.ThumbP>
      </S.Box>
      {moreOn ? (
        <S.CommentBox>
          <S.CommentTop>
            <S.CommentLocation>{shortSentence(14, cafe)}</S.CommentLocation>
            <S.Date>2021년 05월 11일</S.Date>
          </S.CommentTop>
          <S.Comment>
            안녕하세요 제로월드 강남점 입니다. 더욱 친절하고 만족도 높은 제로월드가 되겠습니다. 감사합니다♥
          </S.Comment>
        </S.CommentBox>
      ) : null}
    </S.Container>
  );
};

export default ReviewMoreInfo;
