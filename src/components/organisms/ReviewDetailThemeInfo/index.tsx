import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../stores/rootReducer';
import { activityCheckBox, activityCheckBoxReducer } from '../../../stores/ThemeReviewReducer/activityBox';
import { hardCheckBox, hardCheckBoxReducer } from '../../../stores/ThemeReviewReducer/hardBox';
import { scaryCheckBox, scaryCheckBoxReducer } from '../../../stores/ThemeReviewReducer/scaryBox';
import * as S from './style';

const ReviewDetailThemeInfo = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const hardBox = useSelector<ReducerType, typeof hardCheckBox>((state) => state.hardBox);
  const scaryBox = useSelector<ReducerType, typeof scaryCheckBox>((state) => state.scaryBox);
  const activityBox = useSelector<ReducerType, typeof activityCheckBox>((state) => state.activityBox);

  return (
    <S.Container>
      <S.Title>[빵덕]님이 경험한 테마정보</S.Title>
      <S.SubTitle>체감 난이도는 어떠셨나요?</S.SubTitle>
      <S.Box>
        {hardBox.map((box) => (
          <S.CheckBox key={box.id} clicked={box.clicked} onClick={() => dispatch(hardCheckBoxReducer(box.id))}>
            {box.content}
          </S.CheckBox>
        ))}
      </S.Box>
      <S.SubTitle>체감 공포도를 알려주세요</S.SubTitle>
      <S.Box>
        {scaryBox.map((box) => (
          <S.ScaryBox key={box.id} clicked={box.clicked} onClick={() => dispatch(scaryCheckBoxReducer(box.id))}>
            {box.content}
          </S.ScaryBox>
        ))}
      </S.Box>
      <S.SubTitle>체감 활동성을 알려주세요</S.SubTitle>
      <S.Box>
        {activityBox.map((box) => (
          <S.ScaryBox key={box.id} clicked={box.clicked} onClick={() => dispatch(activityCheckBoxReducer(box.id))}>
            {box.content}
          </S.ScaryBox>
        ))}
      </S.Box>
    </S.Container>
  );
};

export default ReviewDetailThemeInfo;
