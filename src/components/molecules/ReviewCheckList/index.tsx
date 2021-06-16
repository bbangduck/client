import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useClickOutside } from '../../../hooks/useClickOutside';
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
  const [escapeTime, setEscapeTime] = useState('');
  const [hintAmount, setHintAmount] = useState('');
  const [themeScore, setThemeScore] = useState(0);
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);

  const onComplete = () => {
    const time = Number(escapeTime.split(':').join(''));
    if (successClicked && time && escapeTime && hintAmount && themeScore) {
      // 모두 선택 했다면?
      setModalOn(true);
    }
  };

  const onAddMoreReview = () => {
    history.push('/theme/:name/reviewDetail');
  };

  const onStopReview = () => {
    console.log('나중에 할래');
  };

  return (
    <div>
      <S.Title>
        <S.PTag>나의 탈출기록</S.PTag>
        <S.BoldPTag>#1</S.BoldPTag>
      </S.Title>
      <ReviewSuccess successClicked={successClicked} setSuccessState={setSuccessClicked} />
      <ReviewTime setTimeState={setEscapeTime} />
      <ReviewHintAmount setHintState={setHintAmount} hint={hintAmount} />
      <ReviewThemeScore setScoreState={setThemeScore} />
      <ReviewChooseFriend />
      <S.CompleteBtn type="button" onClick={onComplete} data-blink="blink">
        작성 완료
      </S.CompleteBtn>
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
