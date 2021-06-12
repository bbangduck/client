import React, { ReactElement, useState, useEffect } from 'react';
import ReviewHintAmount from '../ReviewHintAmount';
import ReviewSuccess from '../ReviewSuccess';
import ReviewThemeScore from '../ReviewThemeScore';
import ReviewTime from '../ReviewTime';
import * as S from './style';

const ReviewCheckList = (): ReactElement => {
  const [successClicked, setSuccessClicked] = useState('');
  const [escapeTime, setEscapeTime] = useState('');
  const [hintAmount, setHintAmount] = useState('');
  const [ThemeScore, setThemeScore] = useState(0);

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
    </div>
  );
};

export default ReviewCheckList;
