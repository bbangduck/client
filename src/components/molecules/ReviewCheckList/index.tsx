import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useClickOutside } from '../../../hooks/useClickOutside';
import usePopAlarm from '../../../hooks/usePopAlarm';
import ReviewChooseFriend from '../ReviewChooseFriend';
import ReviewCompleteModal from '../ReviewCompleteModal';
import ReviewHintAmount from '../ReviewHintAmount';
import ReviewSuccess from '../ReviewSuccess';
import ReviewThemeScore from '../ReviewThemeScore';
import ReviewTime from '../ReviewTime';
import * as S from './style';

const ReviewCheckList = (): ReactElement => {
  const history = useHistory();
  const [successClicked, setSuccessClicked] = useState('');
  const [escapeTime, setEscapeTime] = useState('00:00:00');
  const [hintAmount, setHintAmount] = useState('');
  const [themeScore, setThemeScore] = useState(0);
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);
  const [popAlarm] = usePopAlarm();

  const onComplete = () => {
    const clearYN = successClicked === '성공';
    const time = Number(escapeTime.split(':').join(''));

    if (clearYN && time && hintAmount && themeScore) {
      // 방탈출에 성공했다면?
      setModalOn(true);
    } else if (!clearYN && hintAmount && themeScore) {
      // 방탈출에 실패했다면?
      setModalOn(true);
    } else {
      popAlarm('리뷰를 작성해주세요.');
    }
  };

  const onAddMoreReview = () => {
    setModalOn(false);
    history.push('/theme/:name/reviewDetail');
  };

  const onStopReview = async () => {
    const clearYN = successClicked === '성공';
    const data = {
      clearYN,
      clearTime: escapeTime,
      hintUsageCount: hintAmount,
      rating: themeScore,
      // 변경예정
      friendIds: [1, 2, 3],
    };
    // try {
    //   await axiosAPI({
    //     method: 'post',
    //     url: '/api/themes/{themeId}/reviews',
    //     data,
    //   });
    //   popAlarm('리뷰작성을 완료하였습니다.');
    // } catch (error) {
    //   if (error.response.data.status === 5402) {
    //     popAlarm('삭제된 테마입니다.');
    //     history.push('/theme');
    //   } else if (error.response.data.status === 2412) {
    //     popAlarm('선택한 유저와 친구관계가 아닙니다.');
    //   } else {
    //     history.push('/error');
    //   }
    // }
  };

  return (
    <div>
      <S.Title>
        <S.PTag>나의 탈출기록</S.PTag>
        <S.BoldPTag>#1</S.BoldPTag>
      </S.Title>
      <ReviewSuccess successClicked={successClicked} setSuccessState={setSuccessClicked} setTimeState={setEscapeTime} />
      <ReviewTime setTimeState={setEscapeTime} successValue={successClicked} timeState={escapeTime} />
      <ReviewHintAmount setHintState={setHintAmount} hint={hintAmount} />
      <ReviewThemeScore setScoreState={setThemeScore} />
      <ReviewChooseFriend />
      <S.BtnBox>
        <S.CompleteBtn type="button" onClick={onComplete} data-blink="blink">
          작성 완료
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
