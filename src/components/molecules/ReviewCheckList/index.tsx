import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useClickOutside } from '../../../hooks/useClickOutside';
import usePopAlarm from '../../../hooks/usePopAlarm';
import { getReviewId } from '../../../stores/reviewIdReducer';
import axiosAPI from '../../../utils/axios';
import removeSessionStorage from '../../../utils/removeSessionStorage';
import ReviewChooseFriend from '../ReviewChooseFriend';
import ReviewCompleteModal from '../ReviewCompleteModal';
import ReviewHintAmount from '../ReviewHintAmount';
import ReviewSuccess from '../ReviewSuccess';
import ReviewThemeScore from '../ReviewThemeScore';
import ReviewTime from '../ReviewTime';
import * as S from './style';

interface Props {
  themeId: string;
}
const ReviewCheckList = ({ themeId }: Props): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [successClicked, setSuccessClicked] = useState<boolean | undefined>();
  const [escapeTime, setEscapeTime] = useState('00:00:00');
  const [hintAmount, setHintAmount] = useState('');
  const [themeScore, setThemeScore] = useState(0);
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);
  const [popAlarm] = usePopAlarm();

  const requestReview = async (
    clear: boolean,
    hintUsageCount: string,
    rating: number,
    clearTime?: string,
    frendIds?: number[],
  ) => {
    try {
      const response = await axiosAPI({
        method: 'post',
        url: `/api/themes/${themeId}/reviews`,
        data: {
          clearYN: clear,
          clearTime,
          hintUsageCount,
          rating,
          frendIds,
        },
      });
      const reviewId = response?.data?.reviewId;
      dispatch(getReviewId(reviewId));
    } catch (err) {
      const errorStatus = err?.response?.status;
      if (errorStatus === (401 || 403)) {
        removeSessionStorage();
        history.push('/');
      } else if (errorStatus === (400 || 404)) {
        history.push('/404');
      }
    }
  };

  const onComplete = () => {
    const time = Number(escapeTime.split(':').join(''));

    if (successClicked && time && hintAmount && themeScore) {
      // ???????????? ????????????????
      setModalOn(true);
    } else if (successClicked === false && hintAmount && themeScore) {
      // ???????????? ????????????????
      setModalOn(true);
    } else {
      popAlarm('????????? ??????????????????.');
    }
  };

  const onAddMoreReview = () => {
    if (successClicked) {
      // ????????????????
      requestReview(successClicked, hintAmount, themeScore, escapeTime).then(() => {
        history.push(`/theme/${themeId}/reviewDetail`);
      });
    } else if (successClicked !== undefined) {
      // ????????????????
      requestReview(successClicked, hintAmount, themeScore).then(() => {
        history.push(`/theme/${themeId}/reviewDetail`);
      });
    }
  };

  const onStopReview = async () => {
    if (successClicked) {
      // ????????????????
      requestReview(successClicked, hintAmount, themeScore, escapeTime).then(() => {
        history.push(`/theme/${themeId}`);
        popAlarm('?????? ????????? ?????????????????????.');
      });
    } else if (successClicked !== undefined) {
      // ????????????????
      requestReview(successClicked, hintAmount, themeScore).then(() => {
        history.push(`/theme/${themeId}`);
        popAlarm('?????? ????????? ?????????????????????.');
      });
    }
  };

  return (
    <div>
      <S.Title>
        <S.PTag>?????? ????????????</S.PTag>
        <S.BoldPTag>#1</S.BoldPTag>
      </S.Title>
      <ReviewSuccess successClicked={successClicked} setSuccessState={setSuccessClicked} setTimeState={setEscapeTime} />
      <ReviewTime setTimeState={setEscapeTime} successValue={successClicked} timeState={escapeTime} />
      <ReviewHintAmount setHintState={setHintAmount} hint={hintAmount} />
      <ReviewThemeScore setScoreState={setThemeScore} />
      <ReviewChooseFriend />
      <S.BtnBox>
        <S.CompleteBtn type="button" onClick={onComplete} data-blink="blink">
          ?????? ??????
        </S.CompleteBtn>
      </S.BtnBox>
      {modalOn ? (
        <ReviewCompleteModal
          clickOutsideClose={clickOutside}
          modalRef={visibleContentRef}
          setModalState={setModalOn}
          onCancel={onStopReview}
          onAddMoreReview={onAddMoreReview}
        />
      ) : null}
    </div>
  );
};

export default ReviewCheckList;
