import React, { ReactElement, useState } from 'react';
import ReviewChooseFriend from '../ReviewChooseFriend';
import ReviewHintAmount from '../ReviewHintAmount';
import ReviewSuccess from '../ReviewSuccess';
import ReviewThemeScore from '../ReviewThemeScore';
import ReviewTime from '../ReviewTime';
import * as S from './style';

const ReviewCheckList = (): ReactElement => {
  const [successClicked, setSuccessClicked] = useState('');
  const [escapeTime, setEscapeTime] = useState('');
  const [hintAmount, setHintAmount] = useState('');
  const [themeScore, setThemeScore] = useState(0);

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
      <S.CompleteBtn type="button">작성 완료</S.CompleteBtn>
    </div>
  );
};

export default ReviewCheckList;
