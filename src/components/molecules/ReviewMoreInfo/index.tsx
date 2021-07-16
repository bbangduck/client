import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useReviewInfinite } from '../../../swr/useReviewInfinite';
import axiosAPI from '../../../utils/axios';
import usePopAlarm from '../../../hooks/usePopAlarm';
import InfoBox from '../../atoms/InfoBox';
import thumb from '../../../assets/images/thumb/thumb.svg';
import * as S from './style';

interface Props {
  reviewId: number;
  moreOn: boolean;
  like: boolean;
  likeCount: number;
  perceivedThemeGenres: {
    genreId: number;
    genreCode: string;
    genreName: string;
  }[];
  sequenceCondition: string;
}
const ReviewMoreInfo = ({
  reviewId,
  moreOn,
  like,
  likeCount,
  perceivedThemeGenres,
  sequenceCondition,
}: Props): ReactElement => {
  const { themeId } = useParams<ParamsTypes>();
  const [popAlarm] = usePopAlarm();
  const { mutate } = useReviewInfinite(themeId, sequenceCondition);

  const onLikeClick = async () => {
    if (like) {
      try {
        await axiosAPI({
          method: 'delete',
          url: `/api/reviews/${reviewId}/likes`,
        });
        mutate();
      } catch (err) {
        if (err.response.data.status === 4432) {
          popAlarm('본인의 리뷰는 클릭할수 없습니다.');
        }
      }
    } else {
      try {
        await axiosAPI({
          method: 'post',
          url: `/api/reviews/${reviewId}/likes`,
        });
        mutate();
      } catch (err) {
        if (err.response.data.status === 4432) {
          popAlarm('본인의 리뷰는 클릭할수 없습니다.');
        }
      }
    }
  };

  return (
    <S.Container>
      {moreOn ? (
        <S.HashBox>
          {perceivedThemeGenres?.map((comment) => (
            <InfoBox
              content={`#${comment}`}
              bgColor="#f4f4f9"
              color="#9c9c9c"
              marginRight={9}
              borderRadius={4}
              marginBottom={8}
            />
          ))}
        </S.HashBox>
      ) : null}
      <S.Help>{likeCount}명에게 도움이 됐어요.</S.Help>
      <S.Box moreOn={moreOn} onClick={onLikeClick}>
        <S.ThumbBox data-blink="blink" like={like}>
          <img src={thumb} alt="도움이 돼요" data-blink="blink" />
          <S.ThumbP data-blink="blink">도움이 돼요</S.ThumbP>
        </S.ThumbBox>
        {/* <S.ThumbP>신고하기</S.ThumbP> */}
      </S.Box>
      {/* {moreOn ? (
        <S.CommentBox>
          <S.CommentTop>
            <S.CommentLocation>{shortSentence(14, cafe)}</S.CommentLocation>
            <S.Date>2021년 05월 11일</S.Date>
          </S.CommentTop>
          <S.Comment>
            안녕하세요 제로월드 강남점 입니다. 더욱 친절하고 만족도 높은 제로월드가 되겠습니다. 감사합니다♥
          </S.Comment>
        </S.CommentBox>
      ) : null} */}
    </S.Container>
  );
};

export default ReviewMoreInfo;
